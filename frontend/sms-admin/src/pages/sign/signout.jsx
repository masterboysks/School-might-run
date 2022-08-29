import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const [, , removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  useEffect(() => {
    removeCookie("token");
    navigate("/");
  }, []);

  return <></>;
}
