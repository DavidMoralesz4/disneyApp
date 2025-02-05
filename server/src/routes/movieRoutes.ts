import { Router } from "express";
import { detailMovieController, getMovieController } from "../controllers/movieController";

export const movieRouter = Router();

movieRouter.get("/movies", getMovieController);

movieRouter.get('/movies/:id', detailMovieController)

