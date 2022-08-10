import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../../../commons/store";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

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
    // 1. 옛날방식
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급받아서 state에 넣어주기

    // 2. 로딩방식
    // setIsLoaded(true);
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    //   setIsLoaded(false);
    // });

    // 3. 글로벌 프로미스 방식
    restoreAccessToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 여기가 프리렌더링시 문제되는 코드!!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  // //////////////////////////////////////////////////////////////////

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers, // 기존 헤더를 스프레드 해서 가져오기
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 새로운 토큰으로 바꿔치기(덮어쓰기)
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
    // errorLink가 들어가고 나서야 apolloSetting이 되는 거라서 그 전에는 graphql-request같은 것들을 사용해줘야 함 (axios나 graphql client를 사용하는 방법, 최근엔 후자를 많이 사용)
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
  // client로 내려받은 자식들부터는 useMutation, useQuery를 사용할 수 있게 됨
}
