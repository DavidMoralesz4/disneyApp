import dotenv from "dotenv";
dotenv.config();

const { PORT, DB_PASSWORD, DB_PORT, DB_HOST, SECRET_KEY} = process.env;

export { PORT, DB_PASSWORD, DB_PORT, DB_HOST, SECRET_KEY};
