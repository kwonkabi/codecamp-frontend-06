// 완주하지 못한 선수 https://programmers.co.kr/learn/courses/30/lessons/42576

// splice 메서드
// 1. 배열 메서드
// 2. 원하는 위치(인덱스)의 데이터를 제거하거나 추가할 수 있다.
// 3. 원본이 저장됨
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1); // [ 2, 3, 4, 5 ] : 인덱스 1부터 끝까지 제거한 데이터
// arr // [ 1 ] : 제거하고 남은 원본 데이터
// arr.splice(1, 3, 9, 9, 9, 9, 9, 9); // [ 1, 9, 9, 9, 9, 9, 9, 5 ]

// ref.1
function solution(participant, completion) {
  // participant 배열에서 지워나가기
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      participant.splice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant[0];
}

// ref.2
function solution(participant, completion) {
  const answer = {};
  // 참가한 선수의 이름과 참가자 수 정리
  for (let i = 0; i < participant.length; i++) {
    answer[participant[i]] === undefined
      ? (answer[participant[i]] = 1)
      : answer[participant[i]]++;
  }
  // 완주 명단에서 완주한 선수 이름 제거
  for (let i = 0; i < completion.length; i++) {
    if (answer[completion[i]]) {
      answer[completion[i]]--;
    }
  }
  //
  for (let key in answer) {
    if (answer[key] !== 0) return key;
  }
}

// ref.3
function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1)); // 참가자 명단을 오름차순으로 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// ref.4
function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
