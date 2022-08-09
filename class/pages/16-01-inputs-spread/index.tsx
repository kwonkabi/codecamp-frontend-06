// 스프레드 연산자로 리팩토링하기!!!

// import axios from 'axios'
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
  //   const [writer, setWriter] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [contents, setContents] = useState("");
  const [inputs, setInputs] = useState({
    // 객체로 들어오는 초깃값
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
    // const result = await axios.get("https://koreanjson.com/users/1")
    // const result = await axios.get("https://koreanjson.com/products/1")

    const result = await createBoard({
      // variables: { writer: inputs.writer, title: inputs.title, contents: inputs.contents }를 스프레드 연산자를 이용해주면 아래와 같다.
      variables: { ...inputs },
    }); // graphql-api 방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  // 1단계)
  // const onChangeWriter = (event) => {
  //   setWriter(event.target.value);
  // }

  // const onChangeTitle = (event) => {
  //   setTitle(event.target.value);
  // }

  // const onChangeContents = (event) => {
  //   setContents(event.target.value);
  // }

  // 2단계)
  // const onChangeWriter = (event) => {
  //   setInputs({
  //     writer: event.target.value,
  //     title: inputs.title,
  //     contents: inputs.contents,
  //   });
  // };

  // const onChangeTitle = (event) => {
  //   setInputs({
  //     writer: inputs.writer,
  //     title: event.target.value,
  //     contents: inputs.contents,
  //   });
  // };

  // const onChangeContents = (event) => {
  //   setInputs({
  //     writer: inputs.writer,
  //     title: inputs.title,
  //     contents: event.target.value,
  //   });
  // };

  // 3단계) 객체에서 키가 똑같은 게 두 번 들어오면 최근 값이 적용되는(덮어쓰는) 원리 이용해서 위의 세 개를 합친다.
  // const onChangeWriter = (event) => {
  //   setInputs({
  //     ...inputs,
  //     writer: event.target.value,
  //   });
  // };

  // const onChangeTitle = (event) => {
  //   setInputs({
  //     ...inputs,
  //     title: event.target.value,
  //   });
  // };

  // const onChangeContents = (event) => {
  //   setInputs({
  //     ...inputs,
  //     contents: event.target.value,
  //   });
  // };

  // 4단계) writer, title, contents만 묶을 수 있으면 나머지는 동일하기 때문에! 바뀌는 태그에 id를 부여하고 묶어준다.
  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value, // 대괄호 주의!
    });
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </div>
  );
}
