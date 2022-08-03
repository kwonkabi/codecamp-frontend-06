// 여러 게시글을 한 번에 수정하고 싶은 경우!!

// 근데 30개를 보여줘야 하면 엘리먼트 30개짜리 배열을 만들 것인가?
// 아래와 같은 경우는 myIndex라는 스테이트 하나를 공유하고 있기 때문

// 게시글 하나하나를 컴포넌트로 빼서 그 컴포넌트의 자바스크립트 영역에서 스테이트를 만들어주면 각각 다른 스테이트를 갖기 때문에 배열을 만들어서 관리해줄 필요가 없다.

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const [myIndex, setMyIndex] = useState([
    // true인 것들만 수정하기 화면으로 보여주기
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickEdit = (event) => {
    // 클릭된 인덱스의 게시물만 수정하기로 바꿔주기
    // const aaa = [...myIndex]; // 여기에 얕은 복사 하면 aaa에는 해줄 필요 없음
    const aaa = myIndex;
    aaa[event.target.id] = true;
    console.log(aaa);
    setMyIndex([...aaa]);
    // 얕은 복사 필요한 이유 : 기존값(원본) 자체가 true로 바뀌어버리면 같아지니까 리렌더 하지 않음 (바뀐 게 없으면 리렌더하지 않는 스테이트 작동 원리)
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {myIndex[index] === false && ( // myIndex 배열에서 index번째가 false
            <MyRow>
              <MyColumn>
                <input type="checkbox" />
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {myIndex[index] === true && <div>수정하기화면입니다</div>}
          {/* myIndex 배열에서 index번째가 true */}
        </div>
      ))}
    </div>
  );
}
