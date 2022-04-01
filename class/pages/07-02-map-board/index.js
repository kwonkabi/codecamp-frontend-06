// 05-04에서 복붙

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
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
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        // {data?.fetchBoards.map((el, index) => (
        // 화면에 보이는 내용
        <Row key={el.number}>
          {/* 누가 누군지 모르니까 key에 서로 다른 값을 넣어주는 것! */}
          {/* jsx니까 또 묶어주기 */}
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          {/* <Column>{el.writer}</Column> */}
        </Row>
      ))}
    </>
  );
};

export default MapBoardPage;
