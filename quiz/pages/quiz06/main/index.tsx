// 2. 로그인, 장바구니로 이동
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeId = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    alert("로그인에 성공했어요!");
    if (localStorage.getItem("baskets") !== "[]") {
      alert("비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?");
      router.push("/quiz06/basket");
    } else {
      router.push("/22-02-login-success");
    }
  };

  return (
    <div>
      아이디(이메일): <input type="text" onChange={onChangeId}></input>
      <br />
      비밀번호: <input type="password" onChange={onChangePassword}></input>
      <br />
      <button onClick={onClickLogin}>로그인하기!</button>
    </div>
  );
}
