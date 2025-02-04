import { Router } from "express";

export const homeRouter: Router = Router();


homeRouter.get('/', (req, res) => {
    res.status(200).json('Todo ok')
})