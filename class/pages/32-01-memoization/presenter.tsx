import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링됩니다.");
  return (
    <div>
      <div>=======================</div>
      <h1>이것은 프리젠터입니다!!!</h1>
      <div>=======================</div>
    </div>
  );
}

export default memo(MemoizationPresenterPage);
// 프롭스를 사용하지 않더라도 넘어오는 스테이트가 변경되면 다시 렌더된다. 그럴 때는 메모가 무의미해짐.
// 메모를 한다는 것은 결국 어딘가에 저장이 된다는 것이기 때문에 남용하면 오히려 퍼포먼스가 떨어짐.
