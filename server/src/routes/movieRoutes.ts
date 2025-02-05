import { Router } from "express";
import { createMovieController, deleteMovieController, detailMovieController, getMovieController, searchMovieController, updateMovieController } from "../controllers/movieController";

export const movieRouter = Router();

movieRouter.get("/movies", getMovieController);

movieRouter.get('/movies/:id', detailMovieController)

movieRouter.get('/movies/search/mov', searchMovieController)

movieRouter.post('/movies', createMovieController)

movieRouter.put('/movies/:id', updateMovieController)

movieRouter.delete('/characters/:id', deleteMovieController)
