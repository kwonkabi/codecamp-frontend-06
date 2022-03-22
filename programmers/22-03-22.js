//https://programmers.co.kr/learn/courses/30/lessons/12937

// 1.
function solution(num){
  if(num%2 === 0){
    return "Even";
  }
  return "Odd"
}

// 2.
function solution(num){
  return num % 2 === 0 ? "Even" : "Odd"
}


// https://programmers.co.kr/learn/courses/30/lessons/12944

// 1.
function solution(arr){
    
  let answer = 0;
  
  for (let i = 0; i < arr.length; i++){
    answer += arr[i]
  }
  return answer / arr.length
}

// 2.
// 함수 뒤에 초기값이 없다면 acc는 0번째 인덱스를, cur은 1번째 인덱스를 가져온다
function solution(arr){
  const answer = arr.reduce( (acc, cur) => {
    // console.log(acc, cur)
    return acc + cur;
  }, 0 )
  return answer / arr.length
}
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


// https://programmers.co.kr/learn/courses/30/lessons/12903

// 1. 
  function solution(s) {
  const center = Math.floor(s.length / 2);
  let answer = s[ center ];
  
  if (s.length % 2 === 0){
    // 짝수 문자열일 경우, 가운데 인덱스로부터 앞에 있는 인덱스 문자까지 추가해서 리턴함
    answer = s[ center - 1 ] + answer;
  }
  return answer
}

// 2.
function solution(s) {
  const center = Math.floor(s.length / 2);
  return s.length % 2 === 1
    ? s[ center ] // 홀수 문자열
    : s.slice( center - 1, center + 1 ) // 짝수 문자열
}

// 3. 
function solution(s) {
  const center = Math.floor(s.length / 2);
  return s.length % 2 // 0은 false 1은 true이기 때문
    ? s[ center ] // 홀수 문자열
    : s.slice( center - 1, center + 1 ) // 짝수 문자열
}