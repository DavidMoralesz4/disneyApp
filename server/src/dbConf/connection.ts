import { Sequelize } from "sequelize-typescript";
import { DB_HOST, DB_PASSWORD, DB_PORT } from "../envs/envs";

export const sequelize = new Sequelize('disney_db', 'root', DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: Number(DB_PORT)
});


const connectionTest = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connectionTest()