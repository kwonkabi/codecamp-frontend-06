// 목적 별로 스토어도 나누자!

import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // state의 이름; 글로벌스테이트는 하나라서 키로 구분함
  default: false, // useState의 초깃값이었던 것
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
