import { Router } from "express";
import { getCharController } from "../controllers/characController";


export const characRoutes: Router = Router()


characRoutes.get('/characters', getCharController)