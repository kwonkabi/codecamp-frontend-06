import "antd/dist/antd.css";
// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";

import { Global } from "@emotion/react";

import { globalStyles } from "../src/commons/styles/globalStyles";
import QuizLayoutPage from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    // uri: "http://example.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <QuizLayoutPage>
          <Component {...pageProps} />
        </QuizLayoutPage>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
