// 07-02에서 복붙
// 게시글 목록 불러오기 (FETCH_BOARDS)
// map으로 뿌리기
// 장바구니 담기 버튼 생성
// 버튼 클릭 시 함수 실행
// 로컬 스토리지에 해당 아이템 담기

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types";

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

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    // 지난번까지 담았던 장바구니 (1. 기존 장바구니 가져오기)
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 중복으로 담기지 않게 (2. 이미 담겼는지 확인하기)
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 상품입니다!");
      return;
    }

    // const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
    // 이걸 만들어서 setItem에 넣어주면 삭제도 가능하다

    // (3. 장바구니에 담기)
    // delete el.__typename // 원본을 건드리는 건 비추
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <>
      {data?.fetchBoards.map((el: IBoard) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </Row>
      ))}
    </>
  );
}
