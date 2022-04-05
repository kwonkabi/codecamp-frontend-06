console.log("타입스크립트를 실행했어요!");

// 데이터베이스 접속
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5017,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true, // 테이블과 DB 동기화
  logging: true, // 쿼리문 어떻게 날리는지 명령어를 찍어줘
});

AppDataSource.initialize()
  .then(() => {
    // 연결 성공하면
    console.log("연결성공!");
  })
  .catch(() => {
    // 연결 실패하면
    console.log("연결실패!");
  });
