import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링됩니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 콘솔 확인용
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // const onClickCountState = useCallback(() => {
  //   // setCountState(countState + 1); // 이렇게 쓰면 안 됨!!
  //   setCountState((prev) => prev + 1);
  // }, []);

  // useMemo로 useCallback 만들어보기!!! (실무에서 사용되진 않음)
  const onClickCountState = useMemo(() => {
    // 리턴하는 값을 기억한다
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>=======================</div>
      <h1>이것은 컨테이너입니다!!!</h1>

      <div>카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) + 1</button>

      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountState}>카운트(state) + 1</button>
      <div>=======================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
