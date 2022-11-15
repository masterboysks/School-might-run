import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoutes from './routes';
import ContexProvider from './contex/ContexProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ContexProvider>
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
    </ContexProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
