import { Users } from "../models/Models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../envs/envs";

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

export const loginService = async (email: string, password: string) => {
    // 1. Buscar el usurio por correo - aqui tenemos el usuario
    const user = await Users.findOne({ where: { email } });
    
    /// * validacion de correo 
    if (!user) {
      throw new Error("El correo no se encuentra registrado");
    }

    // 2. Comparamos la contrasena que nos pasan con la que ya esta almacenada
    const isValidPassword = await bcrypt.compare(password, user.password);
    // * validamos
    if (!isValidPassword) {
      throw new Error("La contrasena es incorrecta");
    }

    if(!SECRET_KEY) {
      throw new Error('La clave secreta del JWT no esta configurada')
    }

    const token = jwt.sign(
      {username: user.username, email: user.email,},
      SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    // const {password: _, ...userWithoutPassowrd} = user.toJSON()  // Eliminar contraseña del objeto usuario
    return {user, token}
};
