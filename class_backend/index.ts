console.log("타입스크립트를 실행했어요!");

// 데이터베이스 접속
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput { # 리턴하는 애들은 그냥 type, 인풋은 input
    writer: String
    title: String
    contents: String
  }

  # Board라는 타입은 gql이 모르는, 우리가 만든 것이기 때문에 써줘야 함
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board] # fetchBoards이기 때문에 배열 안에 들어가 있음
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String 연습용(example)

    createBoard(createBoardInput: CreateBoardInput!): String # 실제사용(backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기

      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    // createBoard: async (parent(api에서 api 요청할 때), args(데이터), context(http요청기타요약정보), info(기타정보)) => {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기

      await Board.insert({
        // DB에 등록될 때까지 기다리기
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      // 수정하면?
      // Board.update({ writer: "철수" }, { title: "제목2" });

      // 삭제하면?
      // Board.delete({ writer: "철수" });
      // Board.update({ writer: "철수" }, { deletedAt: newDate() }); // soft-delete

      return "게시물을 등록했습니다!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

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
    // 백엔드 API 오픈(24시간동안 접속 가능하게끔 대기상태로 만들어주기; listen)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    // 연결 실패하면
    console.log("연결실패!");
  });
