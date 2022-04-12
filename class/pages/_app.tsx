import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "../styles/globals.css";

import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLjPkk7kpdFF9tgHnQwY7II2Uab1j38ic",
  authDomain: "mysite0929-5066c.firebaseapp.com",
  projectId: "mysite0929-5066c",
  storageBucket: "mysite0929-5066c.appspot.com",
  messagingSenderId: "112205659488",
  appId: "1:112205659488:web:dfd8e619c392205fd83205",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
