import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const [logoutUser] = useMutation(LOGOUT_USER);
  // const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const onClickMoveToMain = () => {
    router.push("/");
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickLogout = async () => {
    await logoutUser({});
    alert("로그아웃되었습니다.");
    window.location.reload();
  };

  const onClickMoveToSignUp = () => {
    router.push("/signup");
  };

  return (
    <LayoutHeaderUI
      onClickMoveToMain={onClickMoveToMain}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickLogout={onClickLogout}
      onClickMoveToSignUp={onClickMoveToSignUp}
    />
  );
}
