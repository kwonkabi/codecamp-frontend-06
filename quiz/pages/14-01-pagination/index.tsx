import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

export interface Quiz {
  current: String;
  id: String;
}

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 25%;
`;

const Page = styled.span`
  color: ${(props: Quiz) => (props.current === props.id ? "red" : "black")};
  cursor: pointer;
`;

export default function MapBoardPage(props: Quiz) {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(true);

  const [current, setCurrent] = useState("");
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const PrevBracket = styled.span`
    color: ${isActive1 ? "black" : "gray"};
  `;

  const NextBracket = styled.span`
    color: ${isActive2 ? "black" : "gray"};
  `;

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
    setCurrent(event.target.id);
    setIsActive1(true);
    setIsActive2(true);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsActive1(false);
      return;
    }
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) {
      setIsActive2(false);
      return;
    }
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
        </Row>
      ))}
      <PrevBracket onClick={onClickPrevPage}>❮ </PrevBracket>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <Page
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              current={current}
            >
              {` `} {index + startPage}
            </Page>
          )
      )}
      <NextBracket onClick={onClickNextPage}> ❯</NextBracket>
    </>
  );
}
