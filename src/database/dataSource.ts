import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "TravelMate2420",
  database: "yt_node_admin",
  entities: ["src/**/**/*.entity.ts"],
  logging: true,
  synchronize: true,
});
