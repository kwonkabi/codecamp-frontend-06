import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./child";

export default function MemoizationParentPage() {
  console.log("부모 컴포넌트가 렌더링됩니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // const onClickCountLet = () => {
  //   console.log(countLet + 1);
  //   countLet += 1;
  // };

  // const onClickCountLet = useMemo(
  //   () => () => {
  //     console.log(countLet + 1);
  //     countLet += 1;
  //   },
  //   []
  // );

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // const onClickCountState = () => {
  //   console.log(countState + 1);
  //   setCountState(countState + 1);
  // };

  // const onClickCountState = useCallback(() => {
  //   setCountState((prev) => prev + 1);
  // }, []);

  // const onClickCountState = useMemo(() => {
  //   return () => {
  //     setCountState((prev) => prev + 1);
  //   };
  // }, []);

  return (
    <>
      <div>===================</div>
      <h1>여기는 부모 컴포넌트!!!</h1>

      <div>카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) + 1</button>

      <div>카운트(state) : {countState}</div>
      {/* <button onClick={onClickCountState}>카운트(state) + 1</button> */}
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state) + 1
      </button>
      <div>===================</div>
      <MemoizationChildPage />
    </>
  );
}
