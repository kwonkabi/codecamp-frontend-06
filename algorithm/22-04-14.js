// 피보나치 수 https://programmers.co.kr/learn/courses/30/lessons/12945

// number === Int
// 2의 53제곱에서 1을 뺀 값까지만 인정
// a = 2**53-1
// 9007199254740991
// Number.MAX_SAFE_INTEGER
// 9007199254740991
// Number.isSafeInteger(a)
// true
// Number.isSafeInteger(a+1)
// false

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...

// function solution(n) {
//   // 피보나치 수열들을 저장하는 배열
//   const answer = [0, 1];
//   for (let i=2; i<=n; i++){
//       answer[i] = (answer[i-1] + answer[i-2])
//   }
//   return answer[n] % 1234567;
// }
// 이렇게 하면 n=10000만 되어도 NaN이 뜸, 다음처럼 하시오

// ref.1
function solution(n) {
  // 피보나치 수열들을 저장하는 배열
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n];
}
// ((a % c) + (b % c)) % c
// (a + b) % c

// ref.2
function solution(n) {
  let prev = 0; // 0번째 피보나치 수의 결과
  let next = 1; // 1번째 피보나치 수의 결과
  let sum = prev + next; // 2번째 피보나치 수의 결과

  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;
    return sum;
  }, sum);
  return answer;
}
