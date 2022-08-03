// 실무에서 사용하는 방식!!
// map 안에 있는 애를 하나의 컴포넌트로 분리한다.

import { useQuery, gql } from "@apollo/client";
import BoardCommentItem from "../../src/components/units/board/15-board-comment";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage() {
  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  const { data } = useQuery(FETCH_BOARDS);

  // const onClickEdit = (event) => {
  //   const aaa = myIndex;
  //   aaa[event.target.id] = true;
  //   console.log(aaa);
  //   setMyIndex([...aaa]);
  // };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        // BoardCommentItem 컴포넌트가 10개씩 뿌려지는 거니까 index가 필요 없어짐
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}
