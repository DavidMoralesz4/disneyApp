import { Request, Response } from "express";
import {
  createCharService,
  deleteCharService,
  detailCharService,
  getCharService,
  searchCharService,
  updateCharService,
} from "../services/characService";

export const getCharController = async (req: Request, res: Response) => {
    try {
    const characters = await getCharService();

    res.status(200).json(characters);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const detailCharController = async (req: Request, res: Response) => {
  const {id} = req.params
  
  try {
    const charactersDetail = await detailCharService(id);

    res.status(200).json(charactersDetail);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const searchCharController = async(req: Request, res: Response) => {
    const {name, age, movie} = req.query
    
    try {   
        const characFilter = await searchCharService(name, age)
        res.status(200).json(characFilter)
    } catch (error: unknown) {
        if(error instanceof Error){
            res.status(500).json({message: error.message})
        }
    }
}

export const createCharController = async (req: Request, res: Response) => {
  const { name, image, age, weight, history } = req.body;
  try {
    await createCharService({ name, image, age, history, weight });

    res.status(200).json({ message: "El personaje se creo con exito!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const updateCharController = async (req: Request, res: Response) => {
  const { name, image, age, weight, history } = req.body; /// Parametros que envia un cliente
  const { id } = req.params; // Id del character

  try {
    await updateCharService(id, { name, image, age, weight, history });
    res.status(200).json({ message: "Personaje actualizado con exito" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};

export const deleteCharController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deleteCharService(id);
    res.status(200).json({ message: "Personaje elimado con exito!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
