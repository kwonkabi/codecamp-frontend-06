import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <div>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {/* 태그가 문자열이 아니라 태그로 인식되도록 하는 방법 */}
      {typeof window !== "undefined" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        // 하이드레이션 이슈 해결 방법
        <div style={{ color: "blue" }}></div>
      )}
      <div style={{ color: "orange" }}>상품가격: </div>
    </div>
  );
}

// 하이드레이션 이슈: 위의 경우, 프리 렌더링 시 빨-초-오 순서로 태그 색상을 알고 있는데, 브라우저 렌더링 시 중간에 태그가 하나 더 생기고, 걔가 세번째 태그이기 때문에 오렌지색으로 나오게 됨. 따라서 프리 렌더링 시에, 브라우저 렌더링과 같은 css를 가진 태그를 보여주는(태그 개수를 맞춰주는) 방식으로 해결할 수 있음.
