// 조건문 연습
function boolean(input1, input2) {
	if (input1 === false && input2 === false){
    return false
  } else {
    return true
  }
}

// 홀짝
function evenOdd(num){
  if (num === 0){
    return 'Zero'
  } else{
    return num%2 ? 'Odd' : 'Even' 
  }
}

// 온도
function temperature(num){
  if (num >= 24){
    return ('조금 덥습니다')
  } else if (num >= 19){
    return ('날씨가 좋네요')
  } else if (num <= 18){
    return ('조금 춥네요')
  }
}

// 며칠
function days(month){
  if (month === 2){
    return 28
  } else if ((month <= 7) && (month%2 === 1) || (month >= 8) && (month%2 === 0)){
    return 31
  } else {
    return 30
  }
}

// (미니계산기)
function calculator(num1, num2, operator){
	if (operator === '+'){
    return num1 + num2
  } else if (operator === '-'){
    return num1 - num2
  } else if (operator === '*'){
    return num1 * num2
  } else if (operator ==='/'){
    return num1 / num2
  } else {
    return ('올바른 입력이 아닙니다')
  }
}