// 문자열 내림차순으로 배치하기: https://programmers.co.kr/learn/courses/30/lessons/12917

// 아스키코드
// 1. 각가의 문자들이 대체되는 유니코드 번호를 가지게 된다.
// 2. 문자열끼리 비교할 때는 유니코드 번호로 대소관계를 비교한다.

// 알파벳 소문자의 유니코드 (97 - 122)
// "a".charCodeAt() // 97
// "b".charCodeAt() // 98
// "z".charCodeAt() // 122

// 알파벳 대문자의 유니코드 (65 - 90)
// "A".charCodeAt() // 65
// "Z".charCodeAt() // 90

// sort
// 1. 배열에서만 사용 가능하다.
// 2. 문자열, 숫자를 내림차순 또는 오름차순을 할 수 있다.
// arr.sort((a, b) => {
//   console.log(a, b)
//   // 클 때는 뒤로, 작을 땐 앞으로 보내라; 내림차순
//   return a > b ? -1 : 1
//   return a < b ? 1 : -1
//   // 오름차순 (디폴트)
//   return a > b ? 1 : -1
//   return a < b ? -1 : 1
// })

// 1.
function solution(s){
  const answer = [];
  
  for (let i=0; i<s.length; i++){
    answer.push(s[i]);
  }
  answer.sort((a, b) => {
    return a > b ? -1 : 1
  })
  let result = '';
  for (let i=0; i<answer.length; i++){
    result += answer[i]
  }
  return result
}

// 2. 체인메서드
function solution(s){
  const answer = s.split("")
                  .sort((a, b)=>{
                    return a > b ? -1 : 1;
                  })
                  .join("")
  return answer;
}


// K번째 수: https://programmers.co.kr/learn/courses/30/lessons/42748
// 1.
function solution(array, commands) {
  const answer = [];
  
  for (let idx=0; idx<commands.length; idx++){
    const i = commands[idx][0]
    const j = commands[idx][1]
    const k = commands[idx][2]
    
    // array를 i번째부터 j번째까지 자른 결과를 저장
    const result = array.slice(i-1, j)
                        .sort((a, b) => {
                          return a - b;
                        })
    answer.push(result[k-1]);
}
  return answer
}
// 문자열 정렬에서 사용하는 방식은 숫자열 정렬에서도 작동하지만,
// 아래 방식은 숫자열 정렬에서만 작동한다.
// return b - a // 내림차순
// return a - b // 오름차순

// 2.
function solution(array, commands){
  const answer = commands.map(el => {
    const result = array.slice(el[0]-1, el[1])
                        .sort((a, b) => {
                          return a - b; // 오름차순
                          // return a > b ? 1 : -1;
                        })
    return result[ el[2] - 1]
  })
  return answer;
}