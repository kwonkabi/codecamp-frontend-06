export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("=================== 시작 ===================");
    setTimeout(() => {
      console.log("0초 뒤에 실행될 거예요!!!");
    }, 0);

    // 얘가 걸리는 시간동안 콜스택에서 처리가 끝나야 위에 있는 setTimeout이 실행됨
    let sum = 0;
    for (let i = 0; i <= 9000000000; i += 1) {
      sum = sum + 1;
    }

    console.log("=================== 끄읕 ===================");
  };

  return <button onClick={onClickTimer}>setTimeout 실행시키기!!!</button>;
}
