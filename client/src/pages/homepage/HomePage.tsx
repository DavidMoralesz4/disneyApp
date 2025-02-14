import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import homeStyles from "./home.module.css";
import Navbar from "../../components/nav/Navbar";

export default function HomePage() {
  const isAuth = useAppSelector((state) => state.userAuth.isAuthenticate);

  return isAuth ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}
