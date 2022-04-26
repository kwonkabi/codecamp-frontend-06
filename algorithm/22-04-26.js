// 3진법 뒤집기 https://programmers.co.kr/learn/courses/30/lessons/68935

// 10진법 -> n진법
a = 45;
String(a); // '45'
a.toString(3); // '1200'

// n진법 -> 10진법
b = "0021";
parseInt(b, 3); // 7

// ref.1
function solution(n) {
  // 3진법으로 전환
  n = n.toString(3);

  let answer = "";
  for (let i = n.length - 1; i >= 0; i--) {
    answer += n[i];
  }
  return parseInt(answer, 3);
}

// ref.2
function solution(n) {
  // 3진법으로 전환
  n = n.toString(3).split("").reverse().join("");
  return parseInt(n, 3);
}

// 이진 변환 반복하기 https://programmers.co.kr/learn/courses/30/lessons/70129

// ref.1
function solution(s) {
  let count = 0;
  let remove = 0;

  while (s !== "1") {
    count++;

    let temp = ";";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }
    const num = temp.length;
    s = num.toString(2);
  }
  return [count, remove];
}

// ref.2 (재귀함수)
// 1. 자기 자신을 계속해서 반복하는 함수
// 2. 원하는 결과가 나올 때까지 무한하게 반복한다 (while문 대체)

// let count = 0;
// function recursion() {
//   if (count === 15) {
//     return;
//   }
//   count++;
//   return recursion();
// }
// recursion();

function solution(s) {
  let [count, remove] = [0, 0];

  function recursion() {
    if (s === "1") {
      return [count, remove];
    }
    count++;

    // "0" 제거하고, 숫자 카운트
    remove += s.split("").filter((el) => el === "0").length;
    // "1"만 남긴다
    s = s.split("").filter((el) => el === "1").length;
    s = s.toString(2);

    return recursion();
  }
  return recursion();
}
