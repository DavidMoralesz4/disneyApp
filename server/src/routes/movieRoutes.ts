import { Router } from "express";
import { detailMovieController, getMovieController, searchMovieController } from "../controllers/movieController";
import { searchCharController } from "../controllers/characController";

export const movieRouter = Router();

movieRouter.get("/movies", getMovieController);

movieRouter.get('/movies/:id', detailMovieController)

movieRouter.get('/movies/search/mov', searchMovieController)