import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    try {
      const result = await callApi({
        variables: { writer: myWriter, title: myTitle, contents: myContents },
      });
      console.log(result.data.createBoard.number);
      alert("게시글 등록에 성공했어요!");
      alert("상세페이지로 이동해 볼까요?");
      router.push(
        `/05-08-dynamic-routed-input/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
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
