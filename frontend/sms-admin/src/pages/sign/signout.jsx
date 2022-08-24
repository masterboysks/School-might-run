import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear("user");
    navigate("/");
  }, []);

  return <></>;
}
