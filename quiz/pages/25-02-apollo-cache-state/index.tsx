import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  :hover {
    color: green;
  }
`;

const Column = styled.div`
  width: 30%;
  text-align: center;
`;

const Input = styled.input`
  border-radius: 10px;
  margin: 10px;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
`;

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function QuizApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      <Row>
        <Column>작성자</Column>
        <Column>제목</Column>
        <Column>내용</Column>
      </Row>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
          <Button onClick={onClickDelete(el._id)}> X </Button>
        </Row>
      ))}
      작성자 :
      <Input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호 :
      <Input type="password" onChange={onChangePassword} />
      <br />
      제목 :
      <Input type="text" onChange={onChangeTitle} />
      <br />
      내용 :
      <Input type="text" onChange={onChangeContents} />
      <br />
      <Button onClick={onClickSubmit}>등록하기</Button>
    </>
  );
}
