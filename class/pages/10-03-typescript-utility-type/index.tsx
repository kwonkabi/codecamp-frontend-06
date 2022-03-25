import { StringGradients } from "antd/lib/progress/progress"

export default function TypescriptPage{
  interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
  }

  // 1. Pick type
  type Mytype1 = Pick<IProfile, 'name' | 'age'>

  // 2. Omit type
  type Mytype2 = Omit<IProfile, 'school'>

  // 3. Partial type
  type Mytype3 = Partial<IProfile>

  // 4. Required type
  type Mytype4 = Required<IProfile>

  // 5. Record type
  type ZZZ = 'aaa' | 'qqq' | 'rrr' // Union(합집합) type
  // let apple: ZZZ
  // apple = "qqq"
  type Mytype5 = Record<ZZZ, IProfile>


  // 추가 ) "선언 병합"
  // 타입과 인터페이스의 차이: 타입은 한 번 만들면 끝, 인터페이스는 같은 이름으로 또 만들 수 있음. 병합됨.
  interface IProfile {
    candy: number
  }

  let profile: IProfile
  profile = {
    candy: 3,
    age: 10,
    hobby: 'swimming'
  }


  return <div>타입스크립트 연습하기</div>
}