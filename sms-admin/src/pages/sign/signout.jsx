import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SetAuthContex } from "../../contex/AuthProvider";

export default function Signout() {
  const setAuth = useContext(SetAuthContex);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("akd");
    setAuth(undefined);
    navigate("/");
  }, []);

  return <></>;
}
