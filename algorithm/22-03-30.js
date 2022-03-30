// 콜라츠 추측 https://programmers.co.kr/learn/courses/30/lessons/12943
// ref.1
function solution(num) {
  // 1이 될 때까지 반복한 횟수
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      break;
    }
    answer++;

    // num이 짝수일 때: 해당 수에 2를 나눈다.
    if (num % 2 === 0) {
      // num = num / 2;
      num /= 2;
      // num이 홀수일 때: 해당 수에 3을 곱한 값에 1을 더한다.
    } else {
      num = num * 3 + 1;
    }
    // console.log(answer, num)로 1이 되는 지점 찾기!
  }
  return num !== 1 ? -1 : answer;
}

// ref.2
function solution(num) {
  // 1이 될 때까지 반복한 횟수
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return answer;
    }
    answer++;

    // num이 짝수일 때: 해당 수에 2를 나눈다.
    if (num % 2 === 0) {
      // num = num / 2;
      num /= 2;
      // num이 홀수일 때: 해당 수에 3을 곱한 값에 1을 더한다.
    } else {
      num = num * 3 + 1;
    }
  }
  return -1;
}

// ref.3 while문
function solution(num) {
  let answer = 0;

  // 조건식이 true일 때만 반복 로직 실행
  while (num !== 1) {
    // num이 1이 아닐 때까지만 무한으로 실행 (1이 되면 중단)
    if (answer >= 500) {
      // 500번 이상 실행했다면,
      return -1;
    }
    answer++;
    num =
      num % 2 === 0
        ? num / 2 // 짝수일 경우
        : num * 3 + 1; // 홀수일 경우
  }
  return answer;
}

// ref.4 reduce
function solution(num) {
  let answer = 0;

  const result = new Array(500).fill(1).reduce((acc) => {
    if (acc !== 1) {
      answer++;
      return acc % 2 === 0
        ? acc / 2 // 짝수일 때
        : acc * 3 + 1; // 홀수일 때
    } else {
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : answer;
}
