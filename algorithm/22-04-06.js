// 행렬의 덧셈 https://programmers.co.kr/learn/courses/30/lessons/12950
// ref.1
function solution(arr1, arr2) {
  const answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr1[i].length; l++) {
      const sum = arr1[i][l] + arr2[i][l];

      if (answer[i] === undefined) {
        answer[i] = [];
      }
      answer[i][l] = sum;
    }
  }
  return answer;
}

// ref.2
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    const result = num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
    return result;
  });
  return answer;
}
