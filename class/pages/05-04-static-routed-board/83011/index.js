import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

const StaticRoutedPage = () => {
  // 쿼리는 뮤테이션과 달리 페이지가 그려지면 바로 요청 날아감
  // 페이지가 그려지자마자 실행하고 싶기 때문에 처음부터 variables를 넣어주는 것
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 83011 },
  });

  console.log(data);

  return (
    <>
      {/* data && data., data?.(optional-chaining) : 받아온 데이터가 있으면 앞에거 없으면 뒤에거 보여줘 */}
      <div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다.</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>
        내용: {data?.fetchBoard.contents}번 게시글에 오신 것을 환영합니다.
      </div>
    </>
  );
};

export default StaticRoutedPage;
