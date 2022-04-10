import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
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

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
  };

  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
        </Row>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          onClick={onClickPage}
          id={String(index + startPage)}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
