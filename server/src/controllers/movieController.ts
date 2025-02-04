import { Request, Response } from "express";
import { getMovieService } from "../services/movieService";

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
