import { Route, Routes } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import HomePage from "../pages/homepage/HomePage";
import ProtectedRoute from "./ProtectedRoutes";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
