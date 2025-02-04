import Character from "../models/Characters"

export const getCharService = async() => {
    try {
        const characters = await Character.findAll({ attributes: ["id", "name", "image"] });
        return characters;
      
    } catch (error: any) {
        throw new Error(error)
    }
}