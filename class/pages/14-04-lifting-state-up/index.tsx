// 자식1에서 끌올함
import { useState } from "react";
import Child1 from "../../src/components/units/board/14-lifting-state-up/Child1";
import Child2 from "../../src/components/units/board/14-lifting-state-up/Child2";

export default function LiftingStateUpPage() {
  // 자식1에서 끌올함
  const [count, setCount] = useState(0);
  // 자식1에서 끌올함
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {/* 방법1: 자식1에게 적용 */}
      <Child1 count={count} setCount={setCount} />
      <div>====================================</div>
      {/* 방법2: 자식2에게 적용 */}
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </div>
  );
}
