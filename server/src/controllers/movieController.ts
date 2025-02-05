import { Request, Response } from "express";
import { detailMovieService, getMovieService } from "../services/movieService";

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
    }
  }
};

