import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import { checkFileValidation } from "../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    # app.tsx에서 따로 설정 필요!
    uploadFile(file: $file) {
      # 전송되어야 하는 데이터
      # 받아오고 싶은 데이터
      url
    }
  }
`;

export default function ImageValidationPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>(""); // 없을 수도 있다는 에러 뜨기 때문에 알려주기. 만약 쓰지 않으면 문자열로 간주.
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 없을 땐 어떡하냐는 에러 뜨기 때문에 옵셔널 체이닝 사용
    console.log(file);

    // 검증하기
    const isValid = checkFileValidation(file); // 파일 넘기기
    if (!isValid) return; // true를 받아야 아래가 실행됨

    try {
      const result = await uploadFile({
        // variables: { file: file }, // { gql의 key: 내가 만든 상수 file }
        variables: { file }, // short-hand property
      });
      console.log(result.data?.uploadFile.url); // 주소가 잘 나오는지 콘솔에 찍어보기

      setImageUrl(result.data?.uploadFile.url); // 스테이트에 저장해서 이미지 태그를 통해 화면에 보여주기.
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      <div
        style={{ width: "150px", height: "150px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
      {/* <input type="file" onChange={onChangeFile} multiple /> 여러 개 선택할 때 */}
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
