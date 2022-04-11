export default function MapElPage() {
  // 1. 기본 방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  }); // 리턴 안 돼서 map보다 빠름
  // ["철수", "영희", "훈이"].map((el) => el + "어린이")

  // 2. 매개변수 변경한 방법
  ["철수", "영희", "훈이"].forEach((asdf, qwrqe) => {
    console.log("asdf: ", asdf);
    console.log("qwrqe: ", qwrqe);
  });

  // 3. 함수 선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asdf, qwrqe) {
    console.log("asdf: ", asdf);
    console.log("qwrqe: ", qwrqe);
  });

  // 4. el과 인덱스 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("index: ", index);
    console.log("el: ", el);
  });

  return <div>el 알아보기</div>;
}
