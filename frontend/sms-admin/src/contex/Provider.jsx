import React from "react";
import { CookiesProvider } from "react-cookie";
import AuthContext from "./AuthProvider";
export default function Provider({ children }) {
  return (
    <CookiesProvider>
      <AuthContext>{children}</AuthContext>
    </CookiesProvider>
  );
}
