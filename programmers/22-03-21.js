// https://programmers.co.kr/learn/courses/30/lessons/12925?language=javascript#

function solution(s) {
  // return s * 1
  // return s / 1
  return Number(s); // 실무에서 많이 쓰는 코드 (협업을 위해)
}


// https://programmers.co.kr/learn/courses/30/lessons/12906
// includes를 사용하면 모든 값을 확인하기 때문에, 연속되는 숫자를 앞뒤로 비교해주는 게 좋음

function solution(arr){
  const answer = [];
  for (let i=0; i<arr.length; i++){
    // console.log(arr[i], answer)
    if (answer[answer.length -1] !== arr[i]){
      answer.push(arr[i])
    }
  }
  return answer
}


// https://programmers.co.kr/learn/courses/30/lessons/12948

// 리팩토링 전
function solution(phone_number) {
  let answer = '';
  for (let i=0; i<phone_number.length; i++){
    if (i < phone_number.length -4){
      // 뒷 네 자리를 제외한 앞의 번호들을 가져온다
      answer += "*";
    } else {
      // 뒷 네 자리는 그대로 가져온다
      answer += phone_number[i];
    }
  }
  return answer
}

// 리팩토링 후: padStart와 slice 이용 (원본이 저장되지 않아 재할당 가능)
function solution(phone_number){
  let answer = "";

  // 1. 뒷 네자리를 제외한 앞의 번호들은 *로 채워준다
  answer = answer.padStart(phone_number.length - 4, '*');

  // 2. 뒷 네자리를 잘라서 문자열 뒤에 추가한다
  answer += phone_number.slice(phone_number.length -4)
  answer += phone_number.slice(phone_number.length -4, phone_number.length)
}