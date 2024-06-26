import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "junior177",
  database: process.env.DB_DATABASE || "tasksdb",
  PORT: process.env.PORT || 3000,
};
