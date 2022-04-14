import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      # 줘야 되는 내용
      accessToken # 받아올 내용
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email # 받아올 내용
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  // 안 쓰면 지워도 되지만, 콤마는 있어야 함(구조분해할당)
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인하기
    const result = await loginUser({
      variables: {
        email,
        password, // shorthand property
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2. 유저 정보 받아오기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      // accessToken이 첨부돼 있어야 정상적으로 쿼리가 작동하는데 아직 저장 안 됨, 아래처럼 써주기!
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn; // 요기에 이메일이랑 이름 있겄지!
    console.log(userInfo);

    // 3. 글로벌 스테이트에 유저 정보 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // 객체는 로컬/세션 스토리지에 못 들어감 주의! 문자열로 바꿔서 넣어주자!

    // 4. 로그인 성공 페이지로 이동하기
    alert("로그인에 성공하였습니다!");
    router.push("/24-02-login-use-apollo-client-success");
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
