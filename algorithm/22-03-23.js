// 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919#

// 1.
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}

// 2.
function solution(seoul) {
  const x = seoul.indexOf("Kim");
  return `김서방은 ${x}에 있다`;
}

// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918

// 1.
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    return Number(s[i]) ? true : false;
  }
}

// 2.
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    return isNaN(s[i]) ? false : true;
  }
}
// isNan은 숫자가 맞는지를 검증한다 . === NaN이 맞는지 검증. 숫자가 맞다면 (NaN 값이 아니라면) false, 숫자가 아니라면 true. (알아서 숫자값으로 변환된다.)

// Number.isNaN은 숫자가 맞는지 검증하고, 들어오는 인자가 숫자타임이면서 결과가 NaN값이 맞는지 검증한다. isNaN보다 엄격하게 NaN값을 검증한다.

// 3.
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const answer = s.split("").filter((num) => {
    // 데이터가 문자인 경우만 남기기 (isNaN의 결과가 true인 경우)
    return isNaN(num) === true;
  });
  return answer.length === 0;
}

// 4.
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return isNaN(s) ? false : true;
  } else {
    return false;
  }
}

// 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928

// 1.
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 2.
function solution(n) {
  let answer = n;
  for (let i = 0; i <= n / 2; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 3.
function solution(n) {
  const answer = new Array(n).fill(1).reduce((acc, cur, i) => {
    return n % (cur + i) === 0
      ? // 약수가 맞다면, 약수를 더한 값을 다음으로 넘겨주고,
        acc + (cur + i)
      : // 약수가 아니라면, 더하지 않고 그냥 다음으로 넘겨준다.
        acc;
  }, 0);
  return answer;
}
