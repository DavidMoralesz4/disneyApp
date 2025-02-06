import { Request, Response } from "express";
import { loginService, registerService } from "../services/authService";

export const registerController = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    await registerService(username, email, password);
    res.status(200).json({ message: "Usuario registrado con exito!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const loginController = async(req: Request, res: Response): Promise<any> => {
    const {email, password} = req.body
    try {
        const {user, token} = await loginService(email, password)        
        res.cookie('access_token', token)
        res.status(200).json({user})
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};


export const logoutController = async(req: Request, res: Response) => {
    try {
        res.clearCookie("access_token");
        res.status(200).json({ message: "Sesion cerrada" });
      } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
          }
      }
}