import { Router } from "express";
import { createCharController, deleteCharController, detailCharController, getCharController, searchCharController, updateCharController } from "../controllers/characController";


export const characRoutes: Router = Router()


characRoutes.get('/characters', getCharController)

characRoutes.get('/characters/:id', detailCharController)

characRoutes.get('/characters/search/cha', searchCharController)

characRoutes.post('/characters', createCharController)

characRoutes.put('/characters/:id', updateCharController)

characRoutes.delete('/characters/:id', deleteCharController)