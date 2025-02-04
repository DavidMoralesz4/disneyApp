import { Router } from "express";
import { createCharController, detailCharController, getCharController } from "../controllers/characController";


export const characRoutes: Router = Router()


characRoutes.get('/characters', getCharController)

characRoutes.get('/characters/detail', detailCharController)

characRoutes.post('/characters', createCharController)

// characRoutes.put('/characters')

// characRoutes.delete('/characters')