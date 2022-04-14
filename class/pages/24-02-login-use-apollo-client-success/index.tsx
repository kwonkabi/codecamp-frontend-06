// import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email # 받아올 내용
//       name
//     }
//   }
// `;

function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);
  // const router = useRouter();
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     // 로그인이 안 된 상황
  //     alert("로그인 후 이용 가능합니다.");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{userInfo.name}님 환영합니다!!!</div>;
}

export default withAuth(LoginSuccessPage);
// 로그인이 필요한 페이지는 이제부터 이렇게 앞에 withAuth만 붙여주면 된다!!
