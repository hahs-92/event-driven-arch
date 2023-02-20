import { DataSource } from "typeorm";
import { Product } from "../entities/product.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "TravelMate2420",
  database: "yt_node_admin",
  entities: [Product],
  logging: false,
  synchronize: true,
});
