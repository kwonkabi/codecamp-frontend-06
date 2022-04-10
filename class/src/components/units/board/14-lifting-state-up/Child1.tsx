// 자식1에 있던 함수를 자식2에서도 사용하고, 똑같이 동시에 작동하도록 하고 싶어~!!

// import { useState } from "react";

export default function Child1(props) {
  // const [count, setCount] = useState(0);

  // onClickCountUp = () => {
  //   setCount((prev) => prev + 1);
  // }

  const aaa = () => {
    props.setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>자식1의 카운트: {props.count}</div>
      {/* <button onClick={onClickCountUp}>카운트 올리기!</button> */}
      <button onClick={aaa}>카운트 올리기!</button>
    </div>
  );
}
