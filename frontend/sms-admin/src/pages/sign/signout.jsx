import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const [, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    removeCookie("bc");
    removeCookie("bd");
    removeCookie("cc");
    navigate("/");
  }, []);

  return <></>;
}
