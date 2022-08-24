import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false,
  logging: true,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() =>
    console.log(`Data source initialized at port:${process.env.POSTGRES_PORT}`)
  )
  .catch((err) => console.log(`Error at initialized: ${err}`));
