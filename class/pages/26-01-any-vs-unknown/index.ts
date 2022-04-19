// 1. any 타입 (기냥 자바스크립트와 똑같음)
const getAny = (args: any) => {
  return args + 2;
};

const result = getAny("철수");

//
//
// 2. unknown 타입 (개발자에게 안전하게 코딩하도록 유도!!)
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요.";
  }
};
const result2 = getUnknown("철수");

// 모르는 데이터가 있으면 가급적 unknown을 사용하고 상황에 따라 나눠주는 것이 타입스크립트를 사용하는 이유가 있는 것..
