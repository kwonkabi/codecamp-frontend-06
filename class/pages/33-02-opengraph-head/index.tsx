import Head from "next/head";

export default function OpengraphPage() {
  return (
    <>
      <Head>
        {/* og는 opengraph의 약자 */}
        <meta property="og:title" content="나만의 사이트" />
        <meta
          property="og:description"
          content="나만의 사이트에 오신 것을 환영합니다!!"
        />
        <meta property="og:image" content="http://~~~~"></meta>
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
    </>
  );
}
