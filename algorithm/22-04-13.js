// 폰켓몬 https://programmers.co.kr/learn/courses/30/lessons/1845
// 나의 풀이1: filter를 이용한 중복 제거
function solution(nums) {
  // 중복을 제거하고 남은 종류 수와 n/2 비교
  let numsUnique = nums.filter((el, idx) => {
    return nums.indexOf(el) === idx;
  });
  return nums.length / 2 < numsUnique.length
    ? nums.length / 2
    : numsUnique.length;
}

// 나의 풀이2: 스프레드연산자와 new Set을 이용한 중복 제거
function solution(nums) {
  let numsUnique = [...new Set(nums)];
  return nums.length / 2 < numsUnique.length ? nums.length : numsUnique.length;
}

// ref.1
function solution(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (answer.length < nums.length / 2 && answer.includes(nums[i]) === false) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

// ref.2
function solution(nums) {
  const answer = new Set([]);
  for (let i = 0; i < nums.length; i++) {
    if (answer.size < nums.length / 2) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

// ref.3
function solution(nums) {
  const answer = new Set([]);
  nums.forEach((monster) => {
    if (answer.size < nums.length / 2) answer.add(monster);
  });
  return answer.size;
}

// ref.4
function solution(nums) {
  const answer = new Set(nums).size;
  const limit = nums.length / 2;
  return answer > limit ? limit : answer;
}
