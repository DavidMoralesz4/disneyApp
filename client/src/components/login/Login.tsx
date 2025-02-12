import { Button, TextField } from "@mui/material";
import loginStyle from "./login.module.css";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useLoginUserMutation } from "../../redux/services/authApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUser } from "../../redux/features/userAuthSlice";

interface IFormData {
  email: string
  password: string
}

export default function Login() {
  const dispatch = useAppDispatch()
  const {register, handleSubmit } = useForm<IFormData>();
  const [loading, setLoading] = useState(false);
  const [login] = useLoginUserMutation()
    const isAuth = useAppSelector((state) => state.userAuth.isAuthenticate);
    const navigate = useNavigate()

    console.log(isAuth);
    
  const onSubmit: SubmitHandler<IFormData> = async(data) => {
    try {
      const dataUser = await login(data)
      dispatch(setUser(dataUser.data.user))
      navigate('/home')
    } catch (error) {
      throw new Error('Error al inciar sesion')
    }
  }

  return (
    <>
      <form action="" className={loginStyle.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={loginStyle.containerTwo}>
          <div className={loginStyle.containerTitle}>
            <img src="./Disney-LOGO-vector-01.png" alt="logoDisney" className={loginStyle.logo}/>
            <p  className={loginStyle.titleThree}>Bienvenid@ </p>
            <p className={loginStyle.titleTwo}>Ingresa tus datos para continuar</p>
          </div>

          <div className={loginStyle.inputsContainer}>
            <TextField
              className={loginStyle.Inputs}
              label='Correo Electronico'
              {...register("email")}
            />
          </div>
          <div className={loginStyle.inputsContainer}>
            <TextField
              className={loginStyle.Inputs}
              label="Contrasena"
              type="password"
              autoComplete="current-password"
              {...register("password")}
            />
          </div>

          <Button  type="submit" color="primary" variant="contained" className={loginStyle.buttonLogin}>Iniciar sesion</Button>

          <p className={loginStyle.textRegister}>No tienes cuenta? <NavLink to={'/register'}>Registrate</NavLink></p>
        </div>
      </form>
    </>
  );
}
