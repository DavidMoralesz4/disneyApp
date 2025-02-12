import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";

export default function ProtectedRoute() {
  const isAuth = useAppSelector((state) => state.userAuth.isAuthenticate);

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}