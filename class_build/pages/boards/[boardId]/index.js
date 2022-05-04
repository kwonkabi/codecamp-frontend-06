import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardsDetailPage(props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta property="og:title" content={props.myBoardData?.title} />
        <meta property="og:description" content={props.myBoardData?.contents} />
        <meta property="og:image" content={props.myBoardData?.images[0]} />
      </Head>
      <div>
        안녕하세요. 게시글 상세 페이지입니다. 게시글 ID는 {router.query.boardId}
        입니다.
      </div>
    </>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// '이 페이지는 서버사이드 렌더링 할래!!'
// 페이지 별 (O), 컴포넌트 별(X) : getServerSideProps가 있는 페이지만 ssr
export const getServerSideProps = async (context) => {
  // 데이터 요청할 것
  // const { data } useQuery(FETCH_BOARD); // 이건 안 됨!

  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );

  return {
    props: {
      myBoardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
