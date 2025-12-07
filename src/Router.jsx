import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import HomeViewAllMovies from "./pages/HomeViewAllMovies";
import AuthLayout from "./layouts/AuthLayout";
import InputLogin from "./components/InputLogin";
import InputRegister from "./components/InputRegister";
import DetailMovie from "./components/DetailMovie";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="ViewAll" element={<HomeViewAllMovies />}>
          </Route>
            <Route path="detail/:id" element={<DetailMovie />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<InputLogin />} />
          <Route path="register" element={<InputRegister />} />
        </Route>
      </Routes>
    </>
  );
}
