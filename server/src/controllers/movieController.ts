import { Request, Response } from "express";
import { createMovieService, deleteMovieService, detailMovieService, getMovieService, searchMovieService, updateMovieService } from "../services/movieService";

export const getMovieController = async (_: Request, res: Response) => {
  try {
    const movies = await getMovieService();
    res.status(200).json(movies);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};


export const detailMovieController = async (req: Request, res: Response) => {
  const {id} = req.params
  
  try {
    const movieDetail = await detailMovieService(id);

    res.status(200).json(movieDetail);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    };
  };
};


export const searchMovieController = async(req: Request, res: Response) => {
    const {title, gender, date_release} = req.query
    
    try {   
        const movieFiltered = await searchMovieService(title, date_release)
        res.status(200).json(movieFiltered)
    } catch (error: unknown) {
        if(error instanceof Error){
            res.status(500).json({message: error.message});
        }
    }
}

export const createMovieController = async (req: Request, res: Response) => {
  const { title, image, date_release, score } = req.body;

  try {
    await createMovieService({ title, image, date_release, score });

    res.status(200).json({ message: "La pelicula se creo con exito!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const updateMovieController = async(req: Request, res: Response) => {
    const { title, image, date_release, score } = req.body; /// Parametros que envia un cliente
    const { id } = req.params; // Id de la pelicula
  
    try {
      await updateMovieService(id, { title, image, date_release, score });
      res.status(200).json({ message: "Pelicula actualizada con exito!" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
}

export const deleteMovieController = async(req: Request, res: Response) => {
   const { id } = req.params;
  
    try {
      await deleteMovieService(id);
      res.status(200).json({ message: "Pelicula eliminada con exito!" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
}