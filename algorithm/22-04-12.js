// 모의고사 https://programmers.co.kr/learn/courses/30/lessons/42840

// 1번 수포자가 찍는 방식
// 1, 2, 3, 4, 5 / 1, 2, 3, 4, 5 / 1, 2, 3, 4, 5 / ... (5개의 패턴)

// 2번 수포자가 찍는 방식
// 2, 1, 2, 3, 2, 4, 2, 5 / 2, 1, 2, 3, 2, 4, 2, 5 / ... (8개의 패턴)

// 3번 수포자가 찍는 방식
// 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 / ... (10개의 패턴)

// ref.1
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5], // 5개
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5], // 8개
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10개
];

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const answer = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        answer[l]++;
      }
    }
  }
  const biggest = Math.max(...answer);
  const result = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === biggest) {
      result.push(i + 1);
    }
  }
  return result;
}

// ref.2
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5], // 5개
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5], // 8개
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10개
];

function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    // 찍은 번호가 정답과 일치하는지 확인하고 학생들의 점수를 합산하기 위한 reduce
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score };
  });
  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );
  return scoreList
    .filter((el) => {
      return el.score === biggest;
    })
    .map((el) => el.student);
}
