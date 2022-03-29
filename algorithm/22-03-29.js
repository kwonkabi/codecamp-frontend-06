// 자연수 n을 뒤집어 배열로 만들기 https://programmers.co.kr/learn/courses/30/lessons/12932
// 나의 코드
function solution(n) {
  n = String(n).split("");
  let answer = [];
  for (let i = 0; i < n.length; i++) {
    answer.unshift(Number(n[i]));
  }
  return answer;
}

// ref.1
function solution(n) {
  const answer = [];
  n = String(n);

  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}

// ref.2
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => {
      return Number(str);
    });
}

// 나누어 떨어지는 숫자 배열 https://programmers.co.kr/learn/courses/30/lessons/12910
function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]).sort((a, b) => {
        return a - b;
      });
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer;
}

// ref.1
function solution(arr, divisor) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// ref.2
function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    return num % divisor === 0;
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
