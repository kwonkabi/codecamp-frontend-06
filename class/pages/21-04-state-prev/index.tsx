import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCounter = () => {
    // 1. 화살표 함수
    setCount((prev) => prev + 1);

    // 2. 함수 선언식
    setCount(function (prev) {
      // 로직 추가 가능 (if문, for문 ...)
      return prev + 1;
    });

    // 3. 매개변수 바꿔보기
    setCount((sdfasdfsadf) => sdfasdfsadf + 1);
  };

  return (
    <div>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 증가!!</button>
    </div>
  );
}
