// import axios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # (각각 요청해야 하는 rest-api와는 달리) gql 묶음배송 할 때는 mutation 이름 지어줘야 하기 때문에 위아래 두번 쓰는 것
    # createProduct(title: $title){

    # }

    # fetchBoards(writer: $writer, title: $title, contents: $contents) {

    # }

    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    // const result = await axios.get("https://koreanjson.com/users/1") // 매번 요청을 날려줘야 함
    // const result = await axios.get("https://koreanjson.com/products/1") //
    const result = await callApi({
      variables: {
        writer: "서형",
        title: "하하하",
        contents: "하하하하하하하",
      },
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  return (
    <div>
      <div>{data}</div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  );
}
