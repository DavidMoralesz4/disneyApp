import { Navigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import homeStyles from './home.module.css'

export default function HomePage() {
  const user = useAppSelector((state) => state.userAuth.user);
  const isAuth = useAppSelector((state) => state.userAuth.isAuthenticate);


  if (!isAuth) {
    return <Navigate to="/" />
  }
  
  if (user) 
    return (
      <div className={homeStyles.container}>
        <h1 className={homeStyles.title}>Bienvenido {user.email} 🚀</h1>
        <h2>Hola</h2>
      </div>
    );
}
