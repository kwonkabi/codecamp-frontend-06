import { useRecoilState } from "recoil";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/store";
import { ReactNode, useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { onError } from "@apollo/client/link/error";

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    // uri: "http://example.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
