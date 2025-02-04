import express from 'express';
import morgan from "morgan";
import cors from 'cors'
import { characRoutes } from './routes/characRoutes';

export const server = express()


server.use(morgan('dev'))
server.use(express.json())


server.use('/api', characRoutes)