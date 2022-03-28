// 문자열 내 p와 y의 개수 https://programmers.co.kr/learn/courses/30/lessons/12916
// 1.
function solution(s){
    // p와 y의 개수를 저장하는 변수
    let p = 0;
    let y = 0;
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "p" || s[i] === "P"){
            p++;
        } else if (s[i] === "y" || s[i] === "Y") {
            y++;
        }
    }
    // if (p === y){
    //     return true
    // } else {
    //     return false
    // }
    return p === y;
}

// 2.
function solution(s){
    s = s.toLowerCase()
    
    // p와 y의 개수를 저장하는 변수
    let p = 0;
    let y = 0;
    
    for (let i=0; i<s.length; i++){
        if (s[i] === 'p'){
            p++;
        } else if (s[i] === 'y'){
            y++;
        }
    }
    return p === y;
}
// 대문자로도 검증 가넝!

// 3. 대/소문자 변환하지 않고도 가넝
function solution(s){
    
    // p와 y의 개수를 저장하는 변수
    let p = 0;
    let y = 0;
    
    for (let i=0; i<s.length; i++){
        if (s[i] == 'p'){
            p++;
        } else if (s[i] == 'y'){
            y++;
        }
    }
    return p === y;
}

// 4. forEach()
function solution(s){
    // p와 y의 개수를 저장하는 객체
    const check = [];
    s.toLowerCase() // 1. 소문자 변환
        .split("") // 2. 배열로 변환
        .forEach( str => { // 3. 배열 메서드인 forEach 사용
            check[str] === undefined // 객체에 해당 키값이 없는지 검증
            ? check[str] = 1 // 없다면 초기값 1로 지정
            : check[str]++ // 있다면 기존 값에 1을 더한다.
        })
    return check.p === check.y;
}
// forEach는 리턴값이 없다. 뭘해도 undefined를 받아옴. 상수나 변수에 담지 말으자. 이와는 달리, map은 배열로 받아옴!!!


// + 창모님 코드
function solution(s){
  let aa = (s.toLowerCase().split("").filter(el => el === "p")).length
  let bb =(s.toLowerCase().split("").filter(el => el === "y")).length
  if( aa === bb) {
      return true
  } else if( aa === 0 && bb === 0 ) {
      return false
  }
   return false
}


// 이상한 문자 만들기 https://programmers.co.kr/learn/courses/30/lessons/12930
// 1.
function solution(s) {
    let answer = '';
    // 단어 별로 인덱스를 구분하기 위한 변수
    let idx = 0;
    for (let i=0; i<s.length; i++){
        if (s[i] === " "){
            // 공백을 만났을 경우
            answer += s[i]; // " "
            idx = 0;
        } else {
            answer += idx%2 === 1
                ? s[i].toLowerCase() // 홀수일 때는 소문자로 변환해서 넣어준다.
                : s[i].toUpperCase() // 짝수일 때는 대문자로 변환해서 넣어준다.
            idx++
        }
    }
    return answer
}

// 2.
function solution(s) {
    const answer = s.split(" ")
                    .map(str => {
                        return str.split("")
                                  .map((letter, i) => {
                            return i%2 === 0
                                ? letter.toUpperCase()
                                : letter.toLowerCase()
                        }).join("")
                    }).join(" ")
    return answer
}
// 공백으로 쪼개서 단어별 인덱스를 가져올 수 있음. join 메서드 사용 위치 주의!!