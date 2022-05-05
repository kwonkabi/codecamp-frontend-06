// import { atom } from "recoil";

// export const isEditState = atom({
//   key: "isEditState", // 글로벌스테이트는 하나라서 키로 구분함
//   default: false, // useState의 초깃값이었던 것
// });

// export const accessTokenState = atom({
//   key: "accessTokenState",
//   default: "",
// });

// export const basketState = atom({
//   key: "basketState",
//   default: [],
// });

import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
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

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const basketState = atom({
  key: "basketState",
  default: [],
});
