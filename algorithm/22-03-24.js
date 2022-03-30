// 자릿수 더하기 https://programmers.co.kr/learn/courses/30/lessons/12931

// 1.
function solution(n) {
  answer = 0;
  // 인덱스 값으로 접근하기 위해 문자열 타입으로 변환
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }
  return answer;
}

// 2.
function solution(n) {
  // reduce 사용을 위해선 배열이 필요함
  const answer = n
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0); // 초기값을 숫자 0으로 가져오니까 cur에만 Number를 사용하면 되고,
  // 초기값을 가져오지 않으면, acc와 cur 모두 Number를 씌워줘야 한다.
  return answer;
}
// String()은 기냥 써도 되고, .toString()은 변수에 담아서 사용해야 함.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

// x만큼 간격이 있는 n개의 숫자 https://programmers.co.kr/learn/courses/30/lessons/12954

// 1.
function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

// 2.
function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => {
    // 길이가 n인 배열을 만들어서 1로 채우고, map으로 변형
    return (num + i) * x;
  });
  return answer;
}
