import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import homeStyles from './home.module.css'
import Navbar from "../../components/nav/Navbar";

export default function HomePage() {
  const user = useAppSelector((state) => state.userAuth.user);
  const isAuth = useAppSelector((state) => state.userAuth.isAuthenticate);


  if (!isAuth) {
    return <Navigate to="/" />
  }
  
  if (user) 
    return (
      <div className={homeStyles.container}>
        <Navbar />

        <Outlet/>
      </div>
    );
}
