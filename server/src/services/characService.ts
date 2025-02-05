import { Op } from "sequelize";
import { ICharacters } from "../interfaces/CharacInterface";
import { Character, Movies } from "../models/Models";
/*
      findAll: Metodo
      se usa para buscar todos los registros en la tabla que cumplan ciertas condiciones

      Op: es un objeto que Sequelize proporciona para definir operadores lógicos en las consultas.
*/
export const getCharService = async () => {
  try {
    const characters = await Character.findAll({
      attributes: ["id", "name", "image"],
    });

    if (!characters) {
      throw new Error("No hay personajes");
    }

    return characters;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const detailCharService = async (id: string) => {
  try {
    const characterDetail = await Character.findByPk(id, {
      include: {
        model: Movies, // Usamos Movie (singular)
        attributes: ["title"],
      },
    });

    if (!characterDetail) {
      throw new Error("Hubo un problema en los detalles");
    }

    return characterDetail;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const searchCharService = async (name: any, age: any) => {
  try {
    const characFilter = await Character.findAll({
      attributes: ["id", "name", "image"],
      where: {
        [Op.or]: [{ name: name }, { age: age }],
      },
    });

    return characFilter;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const createCharService = async ({
  name,
  image,
  age,
  history,
  weight,
}: ICharacters) => {
  try {
    if (!name) throw new Error("Por favor ingresa un nombre");

    if (!image) {
      throw new Error("Por favor ingresa una url de imagen");
    } else if (image.length >= 255) {
      throw new Error("La url de la imagen es muy larga");
    }

    if (!age) throw new Error("Por favor ingresa una edad");

    if (!history) {
      throw new Error("Por favor ingresa una historia corta");
    } else if (history.length >= 45) {
      throw new Error("La historia es muy larga");
    }

    if (!weight) throw new Error("Por favor ingresa un peso");

    return await Character.create({
      name: name,
      image: image,
      age: age,
      history: history,
      weight: weight,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const updateCharService = async (
  id: string,
  { name, image, age, weight, history }: ICharacters
) => {
  try {
    await Character.update(
      { name: name, image: image, age: age, weight: weight, history: history },
      { where: { id: id } }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const deleteCharService = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Debes proporcionar un id");
    }

    await Character.destroy({
      where: {
        id: id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
