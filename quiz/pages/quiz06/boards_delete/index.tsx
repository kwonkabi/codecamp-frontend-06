// 1. 게시물 목록 + 게시물 담기 => 담기 취소

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../../src/commons/types/generated/types";

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

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 25%;
`;

export default function QuizBoardsPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // prettier-ignore
    const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
  };

  return (
    <>
      {data?.fetchBoards.map((el: IBoard) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <button onClick={onClickBasket(el)}>담기취소</button>
        </Row>
      ))}
    </>
  );
}
