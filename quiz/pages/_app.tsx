import "antd/dist/antd.css";
// import "../styles/globals.css";

import { AppProps } from "next/app";

import { Global } from "@emotion/react";

import { globalStyles } from "../src/commons/styles/globalStyles";
import QuizLayoutPage from "../src/components/commons/layout";

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <QuizLayoutPage>
          <Component {...pageProps} />
        </QuizLayoutPage>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
