import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

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

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

const MapBoardPage = () => {
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 화살표함수, 시간 입력
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200); // 0.2초동안 아무 반응 없으면 안에 있는 부분 실행됨

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 }); // shorthand property
  // };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    // variables 객체 , page는 숫자이므로 Number로 감싸줌
  };

  return (
    <>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </Word>
              ))}
          </Column>
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
