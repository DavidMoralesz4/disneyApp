import { Router } from "express";
import { createMovieController, detailMovieController, getMovieController, searchMovieController } from "../controllers/movieController";

export const movieRouter = Router();

movieRouter.get("/movies", getMovieController);

movieRouter.get('/movies/:id', detailMovieController)

movieRouter.get('/movies/search/mov', searchMovieController)

movieRouter.post('/movies', createMovieController)