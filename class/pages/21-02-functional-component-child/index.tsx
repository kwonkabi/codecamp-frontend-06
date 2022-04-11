export default function FunctionalComponentChildPage(aaa) {
  // 단지 함수와 매개변수일 뿐이기 때문에 props가 아니라 aaa여도 무관함
  return <div>나의 카운트는: {aaa.count}</div>;
}
