import navStyle from "./nav.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router";
import { useState } from "react";
import ProfileComponent from "../profile/ProfileComponent";
import { Box, Modal } from "@mui/material";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              return isActive
                ? { color: "#00879E", textDecoration: "none" }
                : { color: "black", textDecoration: "none" };
            }}
          >
            <li>Inicio</li>
          </NavLink>

          <NavLink
            to="/characters"
            style={({ isActive }) => {
              return isActive
                ? { color: "#00879E", textDecoration: "none" }
                : { color: "black", textDecoration: "none" };
            }}
          >
            <li>Personajes</li>
          </NavLink>

          <NavLink
            to="/movies"
            style={({ isActive }) => {
              return isActive
                ? { color: "#00879E", textDecoration: "none" }
                : { color: "black", textDecoration: "none" };
            }}
          >
            <li>Peliculas</li>
          </NavLink>
        </ul>

        <ul className={navStyle.ul2}>
          <li className={navStyle.user} onClick={handleOpen}>
            <AccountCircleIcon fontSize="large" color="action" />
          </li>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className={navStyle.containerModal}
            >
              <Box>
                <ProfileComponent />
              </Box>
            </Modal>
          </div>
        </ul>
      </nav>

    </>
  );
}
