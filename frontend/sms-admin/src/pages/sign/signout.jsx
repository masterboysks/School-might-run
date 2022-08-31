import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(cookie);
    removeCookie("bc");
    removeCookie("bd");
    removeCookie("cc");
    navigate("/");
  }, []);

  return <></>;
}
