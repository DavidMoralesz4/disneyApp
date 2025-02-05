import { Op } from "sequelize";
import { Character, Movies } from "../models/Models";

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

export const detailMovieService = async (id: string) => {
  try {
    const movieDetail = await Movies.findByPk(id, {
      include: {
        model: Character, // Usamos Movie (singular)
        attributes: ["name"],
      },
    });

    if (!movieDetail) {
      throw new Error("Hubo un problema en los detalles");
    }

    return movieDetail;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const searchMovieService = async (title: any, date_release: any) => {
  try {

    const allDates = await Movies.findAll();
    
    
    if(title !== undefined ) {
      return await Movies.findAll({
        attributes: ["id", "title", "image", "date_release"],
        where: {
          [Op.or]: [{ title: title }],
        },
      });
    }

    if (date_release !== undefined) {
      return allDates
        .filter((values) => values.date_release >= date_release)
        .sort((a: any, b: any) => a.date_release - b.date_release);
    }

  
    // return movieFiltered;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
