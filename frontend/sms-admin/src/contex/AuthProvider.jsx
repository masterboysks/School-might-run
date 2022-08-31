import { createContext, useState } from "react";
import useToken from "../hooks/useToken";

export const AuthContext = createContext();
export default ({ children }) => {
  const token = useToken();
  const [auth, setAuth] = useState(token);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
