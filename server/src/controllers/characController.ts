import { Request, RequestHandler, Response } from "express";
import { getCharService } from "../services/characService";

export const getCharController: RequestHandler = async(req: Request, res: Response) => {
    try {
        const characters = await getCharService()
        res.status(200).json(characters)
    } catch (error: any) {  
        res.status(500).json({error: error.message})
    }
}