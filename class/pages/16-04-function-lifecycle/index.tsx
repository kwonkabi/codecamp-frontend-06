// 16-03-class-lifecycle의 함수형 버전
// 16-03-class-lifecycle과 비교하며 보기!!!

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

interface IState {
  count: number;
}
export default function CounterPage() {
  const router = useRouter();

  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(99);

  // 1. DidMount
  // componentDidMount() {
  //   console.log("마운트됨!!!");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }
  // useEffect(() => {
  //   console.log("마운트됨!!!");
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate
  // componentDidUpdate() {
  //   console.log("수정되고 다시그려짐!!!");
  // }
  useEffect(() => {
    console.log("수정되고 다시그려짐!!!");
  }, [count]);

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!");
  //   // 채팅방 나가기
  //   // api 요청!!!
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!");
  //   };
  // }, []);

  // 4. DidMount와 WillUnmount를 합치기!!
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예(1. 추가렌더링, 2. 무한루프)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    // console.log(this);
    // console.log("카운터 클릭!!!");
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게?!!"); // 맨 아래에 있는데 가장 먼저 실행됨. 다른 애들은 만들어지는 것만 되고 실행되는 거는 나중(마운트된 후)이기 때문에.

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}

// 대괄호는 의존성 배열(dependency array)라 부름. 이 함수가 실행될 지 안 될 지! (처음에 한 번은 실행됨. class에서와의 차이)
// 만약 대괄호 안이 비었다면, 한 번만 실행되고 땡!
// 대괄호 자체가 없다면, 컴포넌트 자체에서 뭐 하나라도 바뀌면 실행!
// 대괄호 안에 count가 들어가 있다면, count가 바뀔 때마다 실행!
