import { Router } from "express";
import { createCharController, getCharController } from "../controllers/characController";


export const characRoutes: Router = Router()


characRoutes.get('/characters', getCharController)

characRoutes.post('/characters', createCharController)