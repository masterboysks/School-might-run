import { createContext, useState } from "react";

export default ({ children }) => {
  const AuthContext = createContext();
  const [auth, setAuth] = useState("");

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
