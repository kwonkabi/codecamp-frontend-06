import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200"); // 방식과 주소 넣기
    aaa.send(); // 요청
    aaa.addEventListener("load", (res) => {
      // 인자로 들어가는 함수: 콜백 함수

      // 랜덤 숫자 뽑기
      const num = res.target.response.split(" ")[0]; //  167(랜덤 숫자)

      // 랜덤 숫자와 일치하는 게시글 번호 조회
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send(); // 요청
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.UserId;

        // 그 게시글 작성자가 쓴 다른 글 조회
        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res); // 최종 결괏값!!!
        });
      });
    });
  };

  // 콜백 지옥을 해결하기 위해 프로미스 등장! (프로미스 체이닝으로 해결 )

  // new Promise((resolve, reject) => {
  //   // 외부 요청 코드
  //   // const ccc = new XMLHttpRequest();
  //   // ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`)
  //   // ccc.send()
  //   // ccc.addEventListener("load", (res) => {
  //   //   resolve(res); // 최종 결괏값!!!
  //   // })

  //   // 성공
  //   resolve("철수");

  //   // 실패
  //   reject("에러 발생!!!");
  // })
  //   .then((res) => {})
  //   .catch((err) => {});

  // promise-chaining
  const onClickPromise = () => {
    console.log("여기는 1번입니다!!");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("여기는 2번입니다!!");
        const num = res.data.split(" ")[0]; // (랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는 3번입니다!!");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번입니다!!");
        console.log(res);
      });
    console.log("여기는 5번입니다!!");
  };
  // 1-5-2-3-4순으로 실행됨
  // axios는 (마이크로 태스크) 큐로 들어가기 때문

  // 반면 aync/await는 순서가 보장되어 있음 => 직관적이다~!
  const onClickCAsyncawait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    // await는 '프로미스' 앞에서만 쓸 수 있다.

    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <button onClick={onClickCAsyncawait}>Asyncawait 요청하기</button>
    </div>
  );
}
