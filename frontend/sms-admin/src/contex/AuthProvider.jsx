import { createContext, useState } from "react";

export const AuthContext = createContext();
export default ({ children }) => {
  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
