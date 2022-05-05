import { useApolloClient, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";

import LoginUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";

import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const schema = yup.object({
    email: yup
      .string()
      .email("유효한 이메일을 입력해 주세요")
      .required("이메일은 필수 입력 사항입니다."),
    password: yup
      .string()
      .max(8, "비밀번호는 최대 8자리로 입력해 주세요.")
      .required("비밀번호는 필수 입력 사항입니다."),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      // console.log(accessToken);
      alert("로그인에 성공하였습니다!");
      router.push("/market");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  return (
    <LoginUI
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
