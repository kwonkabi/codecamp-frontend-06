import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
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

  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  const onChangeWriter = (event) => {
    // 이벤트 핸들러 함수
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
