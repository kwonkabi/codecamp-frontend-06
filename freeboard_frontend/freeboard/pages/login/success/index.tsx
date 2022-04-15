import { gql, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../../../src/commons/store";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // const router = useRouter();
  // const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!accessToken) {
  //     alert("로그인을 먼저 해주세요.");
  //     router.push("/login");
  //   }
  // }, [accessToken]);
  // // 1시간 뒤에 Token이 없어지면 로그인을 풀어주기 위해

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다~!</div>;
}

export default withAuth(LoginSuccessPage);
