// import axios from 'axios'
import { ChangeEvent, useRef, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # 묶음배송 할 때는 mutation 이름 지어줘야 하기 때문에 위아래 두번 쓰는 것
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

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

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>(""); // 없을 수도 있다는 에러 뜨기 때문에 알려주기. 만약 쓰지 않으면 문자열로 간주.
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  // const [data, setData] = useState("")
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          // 뮤테이션 날릴 때 이미지도 여기에 넣어서 날려주라~!
          images: [imageUrl], // 배열이기 때문에 여러개 가능
        },
      },
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    // setData(result.data.createBoard.message)
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };

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
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={onChangeWriter}></input>
      <br />
      비밀번호: <input type="password" onChange={onChangePassword}></input>
      <br />
      제목: <input type="text" onChange={onChangeTitle}></input>
      <br />
      내용: <input type="text" onChange={onChangeContents}></input>
      <br />
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
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  );
}
