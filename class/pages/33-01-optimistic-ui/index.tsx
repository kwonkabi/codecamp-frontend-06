import { useMutation, useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6269ece4a8255b002988d633" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    // 버튼 누르면 뮤테이션 실행
    likeBoard({
      variables: { boardId: "6269ece4a8255b002988d633" },

      // 방법 1. state 활용

      // 방법 2. 쿼리 두 번
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6269ece4a8255b002988d633" }
      //   }
      // ]

      optimisticResponse: {
        // 실제 값이 들어오기 전에 낙관적으로 받겠다는 값
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1, // 일단 data.likeBoard에는 이 값부터 들어가게 됨, 'undefined면 0 + 1  해줘~!'
      },
      // 3. 캐시(글로벌 스테이트)를 직접 수정 -> optimisticResponse와 같이 사용 가능
      // 백엔드랑 상관 없이 조작해주는 과정
      update(cache, { data }) {
        cache.writeQuery({
          // 기존에 FETCH_BOARD로 받아온 data를 직접 바꿔치기 하기
          query: FETCH_BOARD,
          variables: { boardId: "6269ece4a8255b002988d633" },
          data: {
            fetchBoard: {
              // 필수 입력 두 가지(_id, __typename): 글로벌 스테이트에 저장해둔 걸 구분하기 위한 용도. 나머지는 옵션.
              _id: "6269ece4a8255b002988d633",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <h1>Optimistic-UI</h1>
      <div>현재 좋아요 카운트: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 + 1</button>
    </>
  );
}
