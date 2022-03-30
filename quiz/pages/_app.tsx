import "antd/dist/antd.css";
// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

import { Global } from "@emotion/react";

import { globalStyles } from "../src/commons/styles/globalStyles";
import QuizLayoutPage from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <QuizLayoutPage>
        <Component {...pageProps} />
      </QuizLayoutPage>
    </ApolloProvider>
  );
}

export default MyApp;
