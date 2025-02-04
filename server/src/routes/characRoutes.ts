import { Router } from "express";
import { createCharController, detailCharController, getCharController, updateCharController } from "../controllers/characController";


export const characRoutes: Router = Router()


characRoutes.get('/characters', getCharController)

characRoutes.get('/characters/detail', detailCharController)

characRoutes.post('/characters', createCharController)

characRoutes.put('/characters/:id', updateCharController)

// characRoutes.delete('/characters')