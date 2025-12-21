import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import InputLogin from "./components/InputLogin";
import InputRegister from "./components/InputRegister";
import DetailMovie from "./pages/DetailMovie";
import HomePageComponent from "./pages/HomePage";
import PaymentRequest from "./pages/PaymentRequest";
import OrderTicket from "./pages/OrderTicket";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import ResultPayment from "./pages/ResultPayment";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePageComponent />} />
          <Route path="movie" element={<Movies />} />
          <Route path="detail/:id" element={<DetailMovie />} />
          <Route path="order/:id" element={<OrderTicket />} />
          <Route path="payment/:id" element={<PaymentRequest />} />
          <Route path="result/:id" element={<ResultPayment />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<InputLogin />} />
          <Route path="register" element={<InputRegister />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
