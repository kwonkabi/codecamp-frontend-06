import { gql, useQuery } from "@apollo/client";
import Board from "../../src/components/units/board/14-board-pagination/Board";
import Pagination from "../../src/components/units/board/14-board-pagination/Pagination";

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

// Pagination 컴포넌트 재사용이 목적이기 때문에 (Pagination 컴포넌트에 존재할 필요가 없어서) 끌어올려진 것뿐이지, 자식 컴포넌트들에서 공통으로 사용하기 위함이 아님!!
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <div>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
