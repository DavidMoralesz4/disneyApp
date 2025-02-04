import { Request, Response } from "express";
import { createCharService, getCharService } from "../services/characService";

export const getCharController = async (_: Request, res: Response) => {
  try {
    const characters = await getCharService();
    res.status(200).json(characters);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const createCharController = async(req: Request, res: Response) => {
  const { name, image, age, weight, history } = req.body;
  try {
    await createCharService({name, image, age, history, weight })

    res.status(200).json({message: 'El personaje se creo con exito!'})
  } catch (error: unknown) {
    if(error instanceof Error) {
        res.status(500).json({message: error.message})
    }
  }
};


