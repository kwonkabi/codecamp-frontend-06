import { memo } from "react";

const MemoizationChildPage = () => {
  console.log("자식 컴포넌트가 렌더링됩니다.");

  return (
    <>
      <div>===================</div>
      <h1>여기는 자식 컴포넌트!!!</h1>
      <div>===================</div>
    </>
  );
};

export default memo(MemoizationChildPage);
