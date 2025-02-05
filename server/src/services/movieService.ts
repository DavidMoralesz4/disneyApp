import { Op } from "sequelize";
import { Character, Movies } from "../models/Models";
import { IMovie } from "../interfaces/MovieInterface";

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

    if (title !== undefined) {
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

export const createMovieService = async ({
  title,
  image,
  date_release,
  score,
}: IMovie) => {
  try {
    if (!title) throw new Error("Por favor ingresa un titulo de pelicula");

    if (!image) {
      throw new Error("Por favor ingresa una url de imagen");
    } else if (image.length >= 255) {
      throw new Error("La url de la imagen es muy larga");
    }

    if (!date_release)
      throw new Error("Por favor ingresa una fecha de lanzamiento");

    if (!score) {
      throw new Error("Por favor ingresa un puntaje");
    }

    return await Movies.create({
      title: title,
      image: image,
      date_release: date_release,
      score: score,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const updateMovieService = async (
  /// Por el momento todos los campos seran requeridos para actualizar la pelicula
  id: string,
  { title, image, date_release, score }: IMovie
) => {
  try {

    if(!title) {
      throw new Error('El titulo de la pelicula es requerido')
    }

    if(!image) {
      throw new Error('La imagen del personaje es requerida')
    }

    if(!date_release) {
      throw new Error('La fecha de estreno/lanzamiento es requerida')
    }

    if(!score) {
      throw new Error('El puntaje es requerido')
    }

    await Movies.update(
      { title: title, image: image, date_release: date_release, score: score },
      { where: { id: id } }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};


export const deleteMovieService = async(id: string) => {
  try {
    if (!id) {
      throw new Error("Debes proporcionar un id");
    }

    await Movies.destroy({
      where: {
        id: id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}