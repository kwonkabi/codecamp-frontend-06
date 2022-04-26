import { gql, useMutation } from "@apollo/client";

import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    // file 또는 undefined가 들어 있는 배열
    undefined,
    undefined,
    undefined,
  ]);

  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다!");
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); // blob(binary large object) 파일을 읽어서 임시 url 형태로 만든다
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSumbit = async () => {
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } })) // 초깃값이 undefined니까 'el이 있으면 바꿔라!'
    );

    const resultUrls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    ); // 결과가 있으면, 결과 안의 url을 뽑고, 없으면 빈 문자열을 리턴해라

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "코알라",
          password: "1234",
          title: "안녕하세요",
          contents: "20시간을 자야 합니다",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSumbit}>게시글 등록하기</button>
    </div>
  );
}
