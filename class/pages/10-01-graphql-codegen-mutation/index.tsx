// import axios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 묶음배송 할 때는 mutation 이름 지어줘야 하기 때문에 위아래 두번 쓰는 것
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [callApi] = useMutation<
    Pick<IMutation, "createBoard">, // 받아오는 데이터 result의 타입
    IMutationCreateBoardArgs // variables의 타입 = 'createBoard에 사용되는 인자들'
  >(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    }); // graphql-api방식
    console.log(result);
    console.log(result.data?.createBoard?.message);
    // if(result.data?.createBoard?.message) setData(result.data?.createBoard?.message)
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter}></input>
      <br />
      제목: <input type="text" onChange={onChangeTitle}></input>
      <br />
      내용: <input type="text" onChange={onChangeContents}></input>
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  );
}
