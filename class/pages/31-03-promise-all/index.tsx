export default function PromiseAllPage() {
  const onClickPromise = async () => {
    // promise는 오래 걸리는 작업: callstack -> queue로 빠지게 됨
    console.time("Promise 시작!!!");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("Promise 시작!!!");
  };

  const onClickPromiseAll = async () => {
    // 1. 하나하나씩 확인하는 방법!

    // console.time("PromiseAll 시작!!!");
    // const result = await Promise.all([
    //   // 동시에 실행시키고 싶은 애들 다 넣어줘 (한 번만 기다릴거야!)
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 1000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 2000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("PromiseAll 시작!!!");

    // 2. 한방에 확인하는 방법!
    console.time("PromiseAll 시작!!!");

    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("PromiseAll 시작!!!");
  };

  return (
    <>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
    </>
  );
}
