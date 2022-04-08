import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
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

const MapBoardPage = () => {
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    // 검색어를 포함해서 useQuery를 날린다 : 검색어를 포함해서 리페치한다
    // refetch({ search: search });
    refetch({ search, page: 1 }); // shorthand property
  };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    // variables 객체 , page는 숫자이므로 Number로 감싸줌
  };

  return (
    <>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
};

export default MapBoardPage;
