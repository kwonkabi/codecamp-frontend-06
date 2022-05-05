import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import SignupUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.queries";
import * as yup from "yup";
import { useState } from "react";

// const schema = yup.object({
//   email: yup
//     .string()
//     .email("이메일 형식이 적합하지 않습니다.")
//     .required("이메일은 필수 입력 사항입니다."),
//   password: yup
//     .string()
//     .min(3, "비밀번호는 최소 3자리 이상 입력해 주세요.")
//     .max(15, "비밀번호는 최대 15자리까지만 입력가능 합니다.")
//     .required("비밀번호는 필수 입력 사항입니다."),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
//   name: yup
//     .string()
//     .min(2, "이름은 2자리 이상 입력해 주세요.")
//     .max(10, "이름이 너무 깁니다.")
//     .required("이름은 필수 입력 사항입니다."),
// });

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      alert("회원가입을 축하합니다!");
      router.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onClickSignUp={onClickSignUp}
      onClickMoveToLogin={onClickMoveToLogin}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
