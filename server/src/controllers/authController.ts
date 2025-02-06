import { Request, Response } from "express";
import { registerService } from "../services/authService";

export const registerController = async(req: Request, res: Response) => {
    const {username, email, password} = req.body
    try {
        await registerService(username, email, password)
        res.status(200).json({message: 'Usuario registrado con exito!'})
    } catch (error: unknown) {
        if(error instanceof Error){
            res.status(500).json({message: error.message})
        }
    }
}