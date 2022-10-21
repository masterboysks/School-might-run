import React from "react";
import Admin from "./admin";
import { AuthProvider } from "./AuthProvider";

export default function ContexProvider({ children }) {
  return (
    <AuthProvider>
      <Admin>{children}</Admin>
    </AuthProvider>
  );
}
