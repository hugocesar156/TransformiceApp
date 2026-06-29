import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home.tsx";
import Login from "../pages/access/login/login.tsx";
import { PATHS } from "./paths";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}