// 2016년 https://programmers.co.kr/learn/courses/30/lessons/12901
// month와 week도 직접 작성한 것.

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

// ref.1
// 고정되어 있는 값에 주목하기!!
// 0+ 1월 1일 : 금요일 (+0요일)
// 1+ 1월 2일 : 토요일 (+1요일)
// 2+ 1월 3일 : 일요일 (+2요일)
// 3+ 1월 4일 : 월요일 (+3요일)
// 4+ 1월 5일 : 화요일 (+4요일)
// 5+ 1월 6일 : 수요일 (+5요일)
// 6+ 1월 7일 : 목요일 (+6요일)

// 7+ 1월 8일 : 금요일 (+0요일)
// 8+ 1월 9일 : 토요일 (+1요일)

function solution(a, b) {
  let answer = 0;

  for (let i = 1; i < a; i++) {
    answer += month[i];
  }
  answer += b - 1;
  return week[answer % 7];
}

// ref.2

function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? // a월 이전일 때
          month[mn]
        : // a월일 때
          b - 1)
    );
  }, 0);
  return week[answer % 7];
}

// ref.3

// date1 = Date()
// date2 = new Date()

// typeof date1 // 'string'
// typeof date2 // 'object'

// date2.getFullYear() // 2022
// date2.getMonth() // 3 : 1을 더해주어야 함!
// date1.getMonth() + 1 // 4
// date2.getDate() // 7

// date3 = new Date(2016, 5, 24) // 2016-06-23T15:00:00.000Z
// date3 = new Date(2016, 5 - 1, 24 + 1) // 2016-05-24T15:00:00.000Z

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const answer = new Date(2016, a - 1, b).getDay();
  return week[answer];
}
