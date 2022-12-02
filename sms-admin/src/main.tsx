import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Provider from "./contex/Provider";
import LandingRoutes from "./routes/landingRoutes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider>
      <Routes>
        <Route path="/*" element={<LandingRoutes />} />
      </Routes>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
