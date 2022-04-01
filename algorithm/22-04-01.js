// 두 정수 사이의 합 https://programmers.co.kr/learn/courses/30/lessons/12912

// 다시 시도해보기) 두 수의 곱 양/음수 판별
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// function solution(a, b){
//   let answer = 0;
//   if (a === b){
//       answer = a;
//   } else if (a * b < 0){
//       answer = Math.abs(Math.abs(a) - Math.abs(b))
//   } else if (a * b > 0){
//       answer = Math.abs(Math.abs(a) + Math.abs(b))
//   }
//   return answer;
// }

// ref.1
function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return b;
  } else {
    // 최소값 (반복문을 실행할 때 설정되는 초기값: a와 b 중 작은 값이 들어옴)
    // const min = a > b ? b : a;
    const min = Math.min(a, b);

    // 최대값 (반복문이 종료되는 조건을 설정: a와 b 중 큰 값이 들어옴)
    const max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

// ref.2
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const answer = new Array(max - min + 1).fill(1).reduce((acc, cur, i) => {
    const num = min + i;
    return acc + num;
  }, 0);
  return answer;
}

// 정수 제곱근 판별 https://programmers.co.kr/learn/courses/30/lessons/12934
// 나의 코드!
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

// ref.1
function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      answer = i + 1;
      return answer * answer;
    }
  }
  return answer;
}

// ref.2
function solution(n) {
  let answer = 1;
  while (answer ** 2 < n) {
    answer++;
  }
  return answer ** 2 === n ? (answer + 1) ** 2 : -1;
}
