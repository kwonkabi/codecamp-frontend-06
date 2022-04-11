import FunctionalComponentChildPage from "../21-02-functional-component-child";

export default function FunctionalComponentParentPage() {
  // return <FunctionalComponentChildPage count={123} />;
  return <>{FunctionalComponentChildPage({ count: 123 })}</>;
}

// 함수형 컴포넌트는 기냥 함수구나~ 함수를 실행시키면 되는구나~ props는 기냥 함수의 매개변수구나~ 이름은 상관 없구나~
