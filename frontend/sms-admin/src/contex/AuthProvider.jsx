import { createContext, useState } from "react";

export const AuthContext = createContext();
export const SetAuthContex = createContext();
export default ({ children }) => {
  const [auth, setAuth] = useState("");

  return (
    <AuthContext.Provider value={auth}>
      <SetAuthContex.Provider value={setAuth}>
        {children}
      </SetAuthContex.Provider>
    </AuthContext.Provider>
  );
};
