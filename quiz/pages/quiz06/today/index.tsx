// 4. 클릭 시 저장, 오늘 날짜에 해당하는 데이터만 보여주기
// 1. 게시물 목록 + 게시물 담기 => 담기 취소

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getDate } from "../../../src/commons/libraries/utils";
import { IBoard } from "../../../src/commons/types/generated/types";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InnerWrapper = styled.div`
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 25%;
`;

const getDate = (date) => {
  const newdate = new Date(date);
  const yyyy = String(newdate.getFullYear()).slice(2);
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export default function QuizTodayPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [basketItems, setBasketItems] = useState([]);

  // 현재 날짜
  // const newdate = new Date();
  // const yyyy = String(newdate.getFullYear()).slice(2);
  // const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  // const dd = String(newdate.getDate()).padStart(2, "0");
  // const today = `${yyyy}-${mm}-${dd}`;

  const onClickToday = (el: IBoard) => () => {
    const baskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );

    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 상품입니다!");
      return;
    }

    const { __typename, ...newEl } = el;
    // 클릭했을 때 날짜
    // newEl["date"] = new Date();
    // console.log(newEl);
    // console.log("여기를 기냥 보시오");
    // const clickedDate = getDate(newEl.date);

    baskets.push(newEl);
    localStorage.setItem(getDate(new Date()), JSON.stringify(baskets));
    // localStorage.setItem(today, JSON.stringify(baskets));

    const newBaskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );
    setBasketItems(newBaskets);
  };

  useEffect(() => {
    const baskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );
    setBasketItems(baskets);
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <div style={{ color: "blue" }}>상품! 클릭하세요!</div>
        {data?.fetchBoards.map((el: IBoard) => (
          <Row key={el._id} onClick={onClickToday(el)}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
          </Row>
        ))}
      </InnerWrapper>
      <InnerWrapper>
        <div style={{ color: "blue" }}>오늘 본 게시물</div>
        {basketItems.map((el: IBoard) => (
          <Row key={el._id}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
          </Row>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
}
