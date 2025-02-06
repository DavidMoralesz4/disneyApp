import express from 'express';
import morgan from "morgan";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { characRoutes } from './routes/characRoutes';
import { movieRouter } from './routes/movieRoutes';
import { authRouter } from './routes/authRoutes';

export const server = express()

server.use(cookieParser())
server.use(morgan('dev'))
server.use(express.json())


server.use('/api', characRoutes)
server.use('/api', movieRouter)
server.use('/auth', authRouter)