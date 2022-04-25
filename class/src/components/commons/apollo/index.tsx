// import {
//   ApolloClient,
//   ApolloLink,
//   ApolloProvider,
//   InMemoryCache,
// } from "@apollo/client";
// import { createUploadLink } from "apollo-upload-client";
// import { ReactNode, useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { accessTokenState, userInfoState } from "../../../commons/store";

// interface IApolloSettingProps {
//   children: ReactNode;
// }

// export default function ApolloSetting(props: IApolloSettingProps) {
//   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
//   const [, setUserInfo] = useRecoilState(userInfoState);
//   // setAccessToken은 안 쓰면 지워도 됨, 콤마는 두시오 (구조분해할당)

//   // 1. DEPRECATED!!!
//   // if(process.browser){ // 브라우저에서 실행될 때

//   // 2. 두 번째 방법
//   if (typeof window !== "undefined") {
//     // "프론트엔드서버프로그램(yarn dev)이 아니라면"; 브라우저에서 실행될 때는 윈도우가 있는 것
//     console.log("여기는 브라우저다");
//     const accessToken = localStorage.getItem("accessToken");
//     // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
//     // JSON.parse: 문자열을 다시 객체로 바꿔준다! || 없으면 빈객체
//     setAccessToken(accessToken || ""); // 있으면 넣고 없으면 초깃값(빈문자열)
//   } else {
//     // "프론트엔드서버라면"
//     console.log("여기는 프론트엔드 서버(yarn dev)다");
//   }

//   // 3. 세 번째 방법
//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     setAccessToken(accessToken || ""); // 있으면 넣고 없으면 초깃값(빈문자열)
//     const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
//     setUserInfo(userInfo);
//   }, []);

//   // 프리렌더링 시 문제되는 코드!!!
//   // const accessToken = localStorage.getItem("accessToken");
//   // setAccessToken(accessToken || ""); // 있으면 넣고 없으면 초깃값(빈문자열)

//   const uploadLink = createUploadLink({
//     uri: "http://backend06.codebootcamp.co.kr/graphql",
//     // uri: "http://example.codebootcamp.co.kr/graphql",
//     headers: { Authorization: `Bearer ${accessToken}` },
//   });

//   const client = new ApolloClient({
//     // uri: 'http://example.codebootcamp.co.kr/graphql',
//     // uri: "http://backend06.codebootcamp.co.kr/graphql",
//     link: ApolloLink.from([uploadLink]),
//     cache: new InMemoryCache(),
//   });

//   return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
// }

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, userInfoState } from "../../../commons/store";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // //////////////////////////////////////////////////////////////////

  // 1. 더이상 지원되지 않음!!!
  // if(process.browser){

  // } else {

  // }

  // 2. 두번째 방법!!!
  if (typeof window !== "undefined") {
    console.log("여기는 브라우저다!!!");
    // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(mylocalstorageAccessToken || "");
  } else {
    console.log("여기는 프론트엔드 서버다!!!(yarn dev 다!!!)");
  }

  // 3. 세번째 방법!!!
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급 받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 여기가 프리렌더링시 문제되는 코드!!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  // //////////////////////////////////////////////////////////////////

  // 에러 가져와서 = graphQLErrors
  // 방금 실패했던 쿼리 = operation
  // '전송해줘~' = forward
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. 리프레시 토큰으로 accessToken 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // 헤더 같은 추가 옵션을 context라 함
            // 이 쿼리의 컨텍스트 변경
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });

            // 3-2. 변경된 operation 재요청하기!!
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
