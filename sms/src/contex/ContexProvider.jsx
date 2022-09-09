import React from "react";
import { AuthProvider } from "./AuthProvider";

export default function ContexProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
