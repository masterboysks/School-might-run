import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import ContexProvider from "./contex/ContexProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContexProvider>
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </ContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
