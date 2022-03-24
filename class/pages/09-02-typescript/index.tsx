export default function TypescriptPage{
  // 타입 추론
  let aaa = '안녕하세요'
  aaa = 3

  // 타입 명시
  let bbb: string = '반가워요'

  // 문자 타입
  let ccc: string
  ccc = '반갑습니다~'
  ccc = 3

  // 숫자 타입
  let ddd: number = 10
  ddd = '10'

  // 불린 타입
  let eee: boolean = true
  eee = false
  eee = 'false' // js에서 true로 작동함, ts에서는 불린이 아닌 문자열 타입으로 인식하기 때문에 에러

  // 배열 타입
  let fff: number[] = [1, 2, 3, 4, 5, '안녕하세요']
  let ggg: string[] = ['철수', '영희', '훈이', 123]
  let hhh: (number | string)[] = [1, 2, 3, 4, 5, '안녕하세요']

  // 객체 타입
  interface Iprofile {
    name: string
    age: string | number
    school: string
    hobby?: string // 선택사항
  }

  let profile: Iprofile = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교'
  }
  profile.age = '8살'
  profile.school = 123

  // 함수 타입
  const add = (money1: number, money2: number, unit: string): string => {
    return money1 + money2 + unit
  }
  const result = add(1000, 2000, '원')

  return <div>타입스크립트 연습하기</div>
}