import { useAppDispatch } from "../../redux/hooks";
import { useLazyLogoutUsersQuery } from "../../redux/services/authApi";
import { logout } from "../../redux/features/userAuthSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppSelector } from "../../redux/hooks";
import { NavLink } from "react-router";
import profiStyle from "./profile.module.css";
import { Card } from "@mui/material";

export default function ProfileComponent() {
  const user = useAppSelector((state) => state.userAuth.user);

  const [logoutUser] = useLazyLogoutUsersQuery();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logoutUser(dispatch(logout()));
  };

  if (!user) {
    <NavLink to={"/"} />;
  }

  return (
    <Card className={profiStyle.cardContainer}>
      <div className={profiStyle.container}>
        <h1>Tu cuenta</h1>

        <p>Nombre: {user?.username}</p>
        <p>Correo: {user?.email}</p>
        <p>Contrasena: xxxxxxx</p>

        <button onClick={handleLogout} className={profiStyle.logoutButton}>
          <LogoutIcon fontSize="large" />
        </button>
      </div>
    </Card>
  );
}
