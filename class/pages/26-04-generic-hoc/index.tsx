import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      // 로그인이 안 된 상황
      alert("로그인 후 이용 가능합니다.");
      router.push("/24-01-login-use-apollo-client");
    }
  }, []);

  return <Component {...props} />;
};
