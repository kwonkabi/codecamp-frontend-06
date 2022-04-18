// 숫자 문자열과 영단어 https://programmers.co.kr/learn/courses/30/lessons/81301

// ref.1

// replace
// 1. 문자열 메서드
// 2. 첫 번째 인자의 데이터를 두 번째 인자의 데이터로 변경
// 3. 앞에서부터 찾을 때 맨 처음 찾은 딱 하나만 변경함
// => 중복된 것까지 모두 변경하기 위해서는 replaceAll을 사용한다! (ES6 최신문법이라 프로그래머스에서 작동 안 함)
// => replace와 while문을 replaceAll처럼 사용하기

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}

// ref.2
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  numbers.forEach((str, i) => {
    s = s.split(str).join(i);
  });
  return Number(s);
}

// ref.3 regex
function solution(s) {
  // 정규표현식
  // g명령어는 전역 검색을 의미한다.
  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/two/g, 2);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);
  return Number(s);
}

// ref.4 regex
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    // 정규표현식 내에는 변수 할당이 불가능하기 때문
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
