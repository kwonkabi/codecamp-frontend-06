// 내적 https://programmers.co.kr/learn/courses/30/lessons/70128
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 제일 작은 수 제거하기 https://programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
  answer = [];
  if (arr.length === 1) {
    answer.push(-1);
  } else {
    answer = arr.sort((a, b) => b - a).slice(0, arr.length - 1);
  }
  return answer;
}
