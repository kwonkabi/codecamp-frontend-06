// entities에 들어갈 table 만들기
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // 데코레이터 === 함수
export class Board {
  @PrimaryGeneratedColumn("increment") // 자동으로 생성(증가)되는 주요(중복되지 않는) 컬럼
  // @PrimaryGeneratedColumn("uuid") // number가 아닌 id의 경우
  number!: number; // 반드시 있다!를 의미하는 느낌표

  @Column({ type: "text" }) // 데이터베이스 표에 들어가는 타입
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;
}
