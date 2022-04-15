import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      name
    }
  }
`;

export default function SignupPage() {
  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value) setNameError("");
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value) setEmailError("");
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value) setPasswordError("");
  };

  const onChangePassword2 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
    if (event.target.value) setPassword2Error("");
  };

  const onClickSignup = async () => {
    // if (
    //   name &&
    //   /^\w+@\w+\.\w[a-zA-Z]+$/.test(email) &&
    //   /^\w{8,12}$/.test(password) &&
    //   password === password2
    // ) {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      console.log(result.data.createUser);
      alert("회원가입을 축하합니다.");
      router.push("/signup/success/");
    } catch (error) {
      Modal.error({ content: error.message });
    }
    // }
  };

  return (
    <div>
      이름 <input type="text" onChange={onChangeName} />
      <div>{nameError}</div>
      이메일 <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호 <input type="password" onChange={onChangePassword} />
      <div>{passwordError}</div>
      비밀번호 확인 <input type="password" onChange={onChangePassword2} />
      <div>{password2Error}</div>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
