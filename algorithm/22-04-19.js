// 체육복 https://programmers.co.kr/learn/courses/30/lessons/42862#

// ref.1
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b); // 오름차순
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b); // 오름차순

  // 체육복을 잃어버린 학생들의 수를 뺀 값을 초기값으로 저장
  // (= 체육수업을 들을 수 있는 학생의 수)
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    // 잃어버린 학생의 앞 번호를 조회
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;

      // 잃어버린 학생의 뒷 번호를 조회
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

// ref.2
function solution(n, lost, reserve) {
  const losted = [...lost]; // lost 데이터가 filter 되기 이전의 데이터를 저장한다.
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b); // 오름차순으로 정렬
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b); // 오름차순으로 정렬

  let answer = n - lost.length;
  return lost.reduce((acc, cur) => {
    // 앞에 있는 학생이 여벌 체육복을 가지고 있는지
    const prev = reserve.indexOf(cur - 1);
    // 뒤에 있는 학생이 여벌 체육복을 가지고 있는지
    const next = reserve.indexOf(cur + 1);

    if (prev !== -1) {
      // 앞에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(prev, 1);
      acc++;
    } else if (next !== -1) {
      // 뒤에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(next, 1);
      acc++;
    }
    return acc;
  }, answer);
}
