// 내적(안으로 곱해서 쌓는다!) https://programmers.co.kr/learn/courses/30/lessons/70128
// 나의 풀이
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// ref.1-1
function solution(a, b) {
  const answer = a.reduce((acc, cur, i) => {
    return acc + cur * b[i];
  }, 0);
  return answer;
}

// ref.1-2
function solution(a, b) {
  const answer = b.reduce((acc, cur, i) => {
    return acc + cur * a[i];
  }, 0);
  return answer;
}

// 제일 작은 수 제거하기 https://programmers.co.kr/learn/courses/30/lessons/12935
// '인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다'의미는 '중복이 없다'는 것.
// 나의 풀이
function solution(arr) {
  answer = [];
  if (arr.length === 1) {
    answer.push(-1);
  } else {
    answer = arr.sort((a, b) => b - a).slice(0, arr.length - 1);
  }
  return answer;
}

// ref.1
function solution(arr) {
  answer = [];
  // 1) 제일 작은 수 찾기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  // 2) 제일 작은 수 제거
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

// ref.2
function solution(arr) {
  // 1. 제일 작은 수 찾기
  const min = Math.min(...arr);
  // 2. 제일 작은 수 제거
  const answer = arr.filter((num) => {
    return num !== min;
  });
  return answer.length === 0 ? [-1] : answer;
}
