// 23. 숫자 더하기
function sum(num){
  count = 0;
  for (let i=0; i<num+1; i++){
    count += i
  }
  return count
}

// 24. 특정 문자열 세기
function countLetter(str){
  str = str.toLowerCase()
  let count = 0;
  for (i=0; i<str.length; i++){
    if (str[i] === 'a'){
      count++
    }
  }
  return count
}


// 25. 문자열 삽입
function makeNumber(num){
  str = '';
  for (let i=1; i<num+1; i++){
    str = str + i + '-';
  }
  return str.slice(0, str.length-1)
}

// 26. 홀수 문자열
function makeOdd(num) {
	let str = '';
  for (i=1; i<num+1; i++){
    if (i % 2 === 1){
      str += i
    }
  }
  return str
}