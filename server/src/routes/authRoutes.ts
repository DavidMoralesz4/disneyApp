import { Router } from "express";
import { registerController } from "../controllers/authController";

export const authRouter = Router()

authRouter.post('/register', registerController)