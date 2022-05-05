import Login from "../../src/components/units/login/Login.container";

export default function LoginPage() {
  return <Login />;
}

// import { gql, useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
// import { ChangeEvent, useState } from "react";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../../src/commons/store";

// const LOGIN_USER = gql`
//   mutation loginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       accessToken
//     }
//   }
// `;

// export default function LoginPage() {
//   const router = useRouter();
//   const [, setAccessToken] = useRecoilState(accessTokenState);
//   const [loginUser] = useMutation(LOGIN_USER);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };

//   const onChangeUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const onClickLogin = async () => {
//     if (email && password) {
//       const result = await loginUser({
//         variables: {
//           email,
//           password,
//         },
//       });
//       const accessToken = result.data.loginUser.accessToken;
//       setAccessToken(accessToken);
//       alert("로그인에 성공했어요!");
//       router.push("/login/success");
//     }
//     // 안 적었을 때 alert/modal/error 띄우기
//   };

//   return (
//     <div>
//       EMAIL <input type="text" onChange={onChangeUserId} />
//       PASSWORD <input type="password" onChange={onChangeUserPassword} />
//       <button onClick={onClickLogin}>LOG-IN</button>
//     </div>
//   );
// }
