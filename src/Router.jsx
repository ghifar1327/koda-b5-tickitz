import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import InputLogin from "./components/InputLogin";
import InputRegister from "./components/InputRegister";
import DetailMovie from "./components/DetailMovie";
import HomePageComponent from "./components/HomePageComponent";
import HomeAllMovies from "./components/HomeAllMovies";
import OrderLayout from "./layouts/OrderLayout";
import OrderTicket from "./components/OrderTicket";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePageComponent />} />
          <Route path="movie" element={<HomeAllMovies />} />
          <Route path="detail/:id" element={<DetailMovie />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<InputLogin />} />
          <Route path="register" element={<InputRegister />} />
        </Route>
        <Route element={<OrderLayout />}>
          <Route path="order/:id" element={<OrderTicket />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
