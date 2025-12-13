import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import InputLogin from "./components/InputLogin";
import InputRegister from "./components/InputRegister";
import DetailMovie from "./components/DetailMovie";
import HomePageComponent from "./components/HomePageComponent";
import HomeViewAllMovies from "./components/HomeViewAllMovies";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePageComponent />} />
          <Route path="movie" element={<HomeViewAllMovies />} />
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
