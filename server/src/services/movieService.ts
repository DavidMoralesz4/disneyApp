import { Movies } from "../models/Models";

export const getMovieService = async () => {
  try {
    const movies = await Movies.findAll({
      attributes: ["id", "title", "image", "date_release"],
    });

    if (!movies) {
      throw new Error("No hay peliculas");
    }

    return movies;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
