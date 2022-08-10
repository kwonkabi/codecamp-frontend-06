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
  const [file1, setFile1] = useState<File>();

  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  // 미리보기용 임시 이미지 URL 만들기
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // blob(binary large object) 파일을 읽어서 임시 url 형태로 만든다
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSumbit = async () => {
    // 1. 파일 업로드
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1.data?.uploadFile.url;

    // 2. 위에서 받아온 URL 가지고 뮤테이션 날리기
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "코알라",
          password: "1234",
          title: "안녕하세요",
          contents: "20시간을 자야 합니다",
          images: [imageUrl], // 임시 url(blob)을 넣어도 작동은 되지만 용량이 커서 좋은 방법이 아님. 백엔드 들렀다 와서 짧아진 url을 사용!
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSumbit}>게시글 등록하기</button>
    </div>
  );
}
