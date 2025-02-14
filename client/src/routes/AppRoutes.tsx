import { Route, Routes } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import HomePage from "../pages/homepage/HomePage";
import CharacterPage from "../pages/characters/CharacterPage";
import MoviePage from "../pages/movies/MoviePage";
import WelcomePage from "../pages/welcome/WelcomePage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route>
          <Route element={<HomePage />}>
            <Route path="/home" element={<WelcomePage />} />
            <Route path="/characters" element={<CharacterPage />}/>
            <Route path="/movies" element={<MoviePage />}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
