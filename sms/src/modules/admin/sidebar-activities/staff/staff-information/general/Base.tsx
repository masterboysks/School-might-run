import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import StaffFormPersonalDetailsPicture from "../../../../../../contex/admin/staff/StaffFormPersonalDetailsPicture";

const pages = [
  { name: "Staff", href: "#" },
  {
    name: "Staff Information",
    href: "/admin/dashboard/staff/staff-information/",
  },
  {
    name: "Add",
    href: "#",
  },
];

const Base = () => {
  const photo = useContext(StaffFormPersonalDetailsPicture);
  useEffect(() => {
    return () => {
      localStorage.removeItem("odgdsas");
      localStorage.removeItem("adgdsas");
      localStorage.removeItem("pdgdsas");
      photo.setPhoto();
    };
  }, []);
  return (
    <>
      <Breadnav pages={pages} />
      {/* <Tabs tabs={tabs} /> */}
      <Outlet />
    </>
  );
};

export default Base;
