import navStyle from "./nav.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useLazyLogoutUserQuery } from '../../redux/services/authApi';
import { useAppDispatch } from "../../redux/hooks";
import { useLazyLogoutUsersQuery } from "../../redux/services/authApi";
import { logout } from "../../redux/features/userAuthSlice";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [logoutUser] = useLazyLogoutUsersQuery();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logoutUser(dispatch(logout()));
  };

  return (
    <>
      <nav className={navStyle.navbar}>
          <li className={navStyle.logoLi}>
            <img
              src="./Disney-LOGO-vector-01.png"
              alt="logods"
              className={navStyle.logoDisney}
            />
          </li>
        <ul className={navStyle.ul1}>
          <NavLink
            to="/home"
            style={({ isActive }) => {
              return isActive ? { color: "plum", textDecoration: 'none' } : { color: 'black', textDecoration: 'none'};
            }}
          >
            <li>Inicio</li>
          </NavLink>

          <NavLink
            to="/characters"
            style={({ isActive }) => {
              return isActive ? { color: "plum", textDecoration: 'none' } : {color: 'black', textDecoration: 'none'};
            }}
          >
            <li>Personajes</li>
          </NavLink>

          <NavLink
            to="/movies"
            style={({ isActive }) => {
              return isActive ? { color: "plum", textDecoration: 'none' } : {color: 'black', textDecoration: 'none'};
            }}
          >
            <li>Peliculas</li>
          </NavLink>
        </ul>

        <ul className={navStyle.ul2}>
          <span className={navStyle.logout} onClick={handleLogout}>
            <LogoutIcon fontSize="large" className={navStyle.logoutIcon} />
          </span>

          <NavLink to={"/profile"}>
            <li className={navStyle.user}>
              <AccountCircleIcon fontSize="large"  color="action"/>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
