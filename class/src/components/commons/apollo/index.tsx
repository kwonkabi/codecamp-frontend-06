import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  // setAccessToken은 안 쓰면 지워도 됨, 콤마는 두시오 (구조분해할당)

  // 1. DEPRECATED!!!
  // if(process.browser){ // 브라우저에서 실행될 때

  // 2. 두 번째 방법
  if (typeof window !== "undefined") {
    // "프론트엔드서버프로그램(yarn dev)이 아니라면"; 브라우저에서 실행될 때는 윈도우가 있는 것
    console.log("여기는 브라우저다");
    const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // JSON.parse: 문자열을 다시 객체로 바꿔준다! || 없으면 빈객체
    setAccessToken(accessToken || ""); // 있으면 넣고 없으면 초깃값(빈문자열)
  } else {
    // "프론트엔드서버라면"
    console.log("여기는 프론트엔드 서버(yarn dev)다");
  }

  // 3. 세 번째 방법
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setAccessToken(accessToken || ""); // 있으면 넣고 없으면 초깃값(빈문자열)
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setUserInfo(userInfo);
  }, []);

  // 프리렌더링 시 문제되는 코드!!!
  // const accessToken = localStorage.getItem("accessToken");
  // setAccessToken(accessToken || ""); // 있으면 넣고 없으면 초깃값(빈문자열)

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    // uri: "http://example.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    // uri: 'http://example.codebootcamp.co.kr/graphql',
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
