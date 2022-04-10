import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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
const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  /* width: 25%; */
`;
export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS); // data도 state랑 동일한 역할, 바뀌면 리페치, 리렌더 됨

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) }); // variables 객체 , page는 숫자이므로 Number로 감싸줌
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el.id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </span>
      ))} /} */}

      {/* {/ <span onClick={onClickPage} id="1">
        1
      </span>
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span> */}
    </div>
  );
}
