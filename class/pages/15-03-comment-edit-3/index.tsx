import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      # variables로 받은 페이지
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
  width: 25%;
`;

export default function MapBoardPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  // 데이터가 없다면 스크롤이 실행될 필요 없어! 더 많이 요청할 필요도 없어!
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      // 기존에 10개가 있는데 추가로 페치해줌, 리페치 아님!
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 }, // 어떤 페이지를 페치할 건데? ($page 내용) : 받아온 데이터.페치보드의 객체 개수를 10으로 나눠서 올려주기(현재 몇 페이지까지 받았는지?) + 1(그 다음페이지를 추가로 요청할 것이기 때무네~)
      updateQuery: (prev, { fetchMoreResult }) => {
        // 받아온 useQuery를 수정하는 부분 (useQuery로 요청한 거, {추가로 요청한 거})

        // 만약에 추가로 요청했는데 그 페이지가 0개일 경우! 그대로 받아온다!
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
        // 리턴: "페치보드를 업데이트 해줘!"
        // 이전에 받은 10개랑 추가로 받은 개수 보여주면 됨: {기존에 fetchBoards한 거를 [...기존꺼 10*n개, ...추가 10개]로 바꿔줘}
      },
    });
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </InfiniteScroll>
  );
}
