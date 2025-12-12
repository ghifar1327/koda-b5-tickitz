import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Router from "./Router.jsx";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistedStore } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
