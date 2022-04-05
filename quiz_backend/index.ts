import { DataSource } from "typeorm";
import { FetchProducts } from "./Product.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5017,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [FetchProducts],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!");
  })
  .catch(() => {
    console.log("연결실패!");
  });
