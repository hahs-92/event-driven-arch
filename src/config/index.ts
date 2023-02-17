import { config } from "dotenv";

config();

export const configuration = {
  username: process.env.POSTSGRES_USER,
  password: process.env.POSTSGRES_PASSWORD,
  database: process.env.POSTSGRES_DATABASE,
  port: parseInt(process.env.POSTSGRES_PORT as string),
};

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017";
