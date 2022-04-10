import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

const DynamicRoutedPage = () => {
  const router = useRouter();
  console.log(router);

  // 요로코롱 하면 data를 요청하고 받을 때까지 기다려주지 않기 때문에
  // data에는 undefined가 들어와짐!
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  console.log(data);

  return (
    <div>
      <div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다!!!</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </div>
  );
};

export default DynamicRoutedPage;
