// 07-02에서 복붙
// 게시글 목록 불러오기 (FETCH_BOARDS)
// map으로 뿌리기
// 장바구니 담기 버튼 생성
// 버튼 클릭 시 함수 실행
// 로컬 스토리지에 해당 아이템 담기

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <>
      {basketItems.map((el: IBoard) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
    </>
  );
}
