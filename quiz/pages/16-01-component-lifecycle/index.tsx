import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function QuizCounterPage() {
  const router = useRouter();

  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    // return () => {
    alert("Changed!");
    // };
  }, [isChange]);

  useEffect(() => {
    return () => {
      alert("Bye!");
    };
  }, [router]);

  const onClickChange = () => {
    setIsChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}

// 컴포넌트 생명주기
// useEffect 가 필요한 이유
// 컴포넌트가 렌더링 된 후, 혹은 컴포넌트가 업데이트 될 때마다 실행시키고 싶은 작업이 있을 시 사용
