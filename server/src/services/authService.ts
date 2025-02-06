import { Users } from "../models/Models";
import bcrypt from "bcrypt";

export const registerService = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const user = await Users.findOne({ where: { username } });
    const validateEmail = await Users.findOne({ where: { email } });

    const hashPassword = await bcrypt.hash(password, 10);

    if (validateEmail) {
      throw new Error("El correo electronico ya existe");
    }

    if (user) {
      throw new Error("El usuario ya existe");
    }

    const userCreated = await Users.create({
      username: username,
      email: email,
      password: hashPassword,
    });

    return userCreated;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
