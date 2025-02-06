import { Router } from "express";
import { loginController, logoutController, registerController } from "../controllers/authController";

export const authRouter = Router()

authRouter.post('/register', registerController)

authRouter.post('/login', loginController)

authRouter.get('/logout', logoutController)