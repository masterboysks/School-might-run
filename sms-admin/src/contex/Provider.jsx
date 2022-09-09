import React from "react";
import { CookiesProvider } from "react-cookie";
import AuthProvider from "./AuthProvider";
export default function Provider({ children }) {
  return (
    <CookiesProvider>
      <AuthProvider>{children}</AuthProvider>
    </CookiesProvider>
  );
}
