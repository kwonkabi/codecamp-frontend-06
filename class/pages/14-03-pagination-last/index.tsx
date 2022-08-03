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

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1); // 기준이 되는 페이지
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT); // 위의 data와 이름이 같아서 바꿔준 거시다
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  // fetchBoardsCount를 통해 알아낸 글의 총 개수를 10으로 나눠서 소숫점 첫째 자리를 올림한 것!!
  // 만약 글이 13개라면 2페이지가 필요하기 때문
  // (백엔드에서 받아오기 전까지 undefined이기 때문에 ?달아주기)

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return; // 현재 페이지 아니고 스타트 페이지인 것 주의!!
    setStartPage((prev) => prev - 10); // 페이지 숫자 바꾸기
    refetch({ page: startPage - 10 }); // 실제로 해당하는 페이지로 바꿔주기
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return; // startPage가 lastPage보다 크다면 다음 페이지 버튼을 사용할 수 없다
    // if (!(startPage + 10 <= lastPage)) return;
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
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            // 현재 페이지가 마지막 페이지와 같거나 마지막 페이지보다 작을 때만 span 태그를 보여줘라
            // 함수는 10번 실행됨. 조건이 충족되지 않으면 undefined가 보여지는 것뿐.
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {` `} {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
