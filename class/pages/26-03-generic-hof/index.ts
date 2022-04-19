// 1. HOF - 일반 타입
function firstFunc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const result1 = firstFunc1("영희")(8);

//
//
// 2. HOF - any 타입
function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}
const result2 = firstFunc2("영희")(8);

//
//
// 3. HOF - generic 타입
function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const result3 = firstFunc3("영희")(8);

//
//
// 4. HOF - generic 타입(화살표 함수)
// const firstFunc4 = <T>(arg1: T) => {
//   return const secondFunc4 = <U>(arg2: U): [T, U] => {
//     return [arg1, arg2];
//   };
// }
// prettier-ignore
const firstFunc4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
  return [arg1, arg2];
}
const result4 = firstFunc4("영희")(8);

//
//
// 5. HOF - generic 타입(컴포넌트에 응용해보기 - HOC)
// prettier-ignore
const withAuth = <C>(component: C) => <P>(props: P): [C, P] => {
  return [component, props];
}
const result5 = withAuth("bbb")({ aaa: "철수" });
