import React, { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contex/AuthProvider";

export default function Signout() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("ref");
    setAuth(undefined);
    navigate("/");
  }, []);

  return <></>;
}
