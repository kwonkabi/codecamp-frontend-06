// 시저 암호 https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i].charCodeAt())
    // console.log(String.fromCharCode(s[i].charCodeAt()+1))
    if (s[i] === "z" || s[i] === "Z") {
      answer += String.fromCharCode(s[i].charCodeAt() + n - 26);
    } else if (s[i] === " ") {
      answer += " ";
    } else {
      answer += String.fromCharCode(s[i].charCodeAt() + n);
    }
  }
  return answer;
}

// ref.1
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] === " ") {
      answer += s[i];
    } else {
      let idx = alphabet.indexOf(s[i]);
      const word =
        idx > 25
          ? alphabet.substring(26) // 대문자에 해당하는 문자열을 잘라온다
          : alphabet.substring(0, 26); // 소문자에 해당하는 문자열을 잘라온다
      idx = word.indexOf(s[i]) + n;
      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// ref.2
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    } else {
      console.log(s[i]);
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// ref.3
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;
    if (idx >= 26) {
      idx -= 26;
    }

    return acc + (cur === " " ? " " : word[idx]);
  }, "");
  return answer;
}

// ref.4
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let idx = s[i].charCodeAt() + n;
    console.log(s[i], idx, String.fromCharCode(idx));
    if (idx > 122 || (idx > 90 && idx - n < 97)) {
      // z(122)를 넘어가거나
      // Z(90)를 넘어가면서 z(90)를 넘어가지 않을 때
      idx -= 26;
    }
    answer += String.fromCharCode(idx);
  }
  return answer;
}
