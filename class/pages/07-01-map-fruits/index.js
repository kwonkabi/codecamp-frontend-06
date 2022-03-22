// 리렌더링 시에도 새로 만들어지지 않음!!
// 보통 이렇게 자바스크립트 바깥쪽이나 아예 다른 파일로 분리해서 사용한다.
// 이유: state의 원리와 유관. state가 바뀌면 컴포넌트를 다시 바꿔주는데, return 안쪽뿐만 아니라 바깥쪽도 다시 그려주기 때문에 아예 밖으로 빼주어야 함.
// useState와 같은 react-hooks들은 다시 만들어지지 않음. 이 덕분에 함수형 컴포넌트도 사용할 수 있게 됨(원래는 클래스형 컴포넌트만 사용 가능했었음).

const FRUITS = [
  { number: 1, title: "레드향" }, // 원하는 결과: <div>1 레드향</div>
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];


export default function MapFruitsPage(){

  // const aaa = [ <div>1 레드향</div>, <div>2 샤인머스캣</div>, <div>3 산청딸기</div>]
  // const bbb = ["나의레드향", "나의샤인머스캣", "나의산청딸기"].map((el) => (<div>{el}</div>))
  // const ccc = FRUITS.map((el) => (<div>{el.number} {el.title}</div>))


  return(

    // <div>{aaa}</div>
    // <div>{bbb}</div>
    // <div>{ccc}</div>
    <div>
      {FRUITS.map((el) => (
        <div>{el.number} {el.title}</div>
      ))}
    </div> // container와 presenter로 나뉘어 있을 경우, 다른 파일로 가서 찾아야 하기 때문에, 그리고 코드를 위에서 아래로 읽기 때문에, 주로 변수로 빼지 않고 다이렉트로 사용.
  )
}