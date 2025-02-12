import { useNavigate } from 'react-router';
import loginStyle from '../../components/login/login.module.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import {toast} from 'sonner'
import { Button, TextField } from '@mui/material';
import { useRegisterUserMutation } from '../../redux/services/authApi';

interface IFormDataRegis {
  username: string
  email: string
  password: string
}

export default function Register() {
  const {register, handleSubmit } = useForm<IFormDataRegis>();
  const [registerUser] = useRegisterUserMutation()
  
  const navigate = useNavigate()

    
  const onSubmit: SubmitHandler<IFormDataRegis> = async(data) => {
    try {
      await registerUser(data)
      // sonner.toast.success('Te registraste con exito!')
      toast.success('Te registraste con exito!')
      navigate('/login')
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
          <p  className={loginStyle.titleThree}>Create una cuenta</p>
          {/* <p className={loginStyle.titleTwo}>Ingresa tus datos para continuar</p> */}
        </div>

        <div className={loginStyle.inputsContainer}>
          <TextField
            className={loginStyle.Inputs}
            type='text'
            label='Nombre de usuario'
            {...register("username")}
          />
        </div>

        <div className={loginStyle.inputsContainer}>
          <TextField
            className={loginStyle.Inputs}
            label='Correo Electronico'
            type='email'
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

        {/* <p className={loginStyle.textRegister}>Regresa a<NavLink to={'/register'}>Iniciar Sesion</NavLink></p> */}
      </div>
    </form>
  </>
  )
}
