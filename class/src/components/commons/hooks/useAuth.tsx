import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true)

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      // 로그인이 안 된 상황
      alert("로그인 후 이용 가능합니다.");
      router.push("/24-01-login-use-apollo-client");
    }
  }, []);

  // return {
  //   // isLoading: isLoading
  //   isLoading // shorthand property
  // }
}
