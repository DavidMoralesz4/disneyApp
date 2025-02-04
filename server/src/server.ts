import express from 'express';
import morgan from "morgan";
import cors from 'cors'
import { homeRouter } from './routes/home.route';

export const server = express()


server.use(morgan('dev'))
server.use(express.json())


server.use('/api', homeRouter)