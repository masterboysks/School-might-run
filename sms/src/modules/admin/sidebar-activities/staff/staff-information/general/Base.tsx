import { useContext } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import StaffFormPersonalDetailsPicture from "../../../../../../contex/admin/staff/StaffFormPersonalDetailsPicture";
// import Tabs from "../Tabs";

// const tabs = [
//   {
//     name: "General details",
//     href: "#",
//     current: true,
//   },
//   {
//     name: "Academic details",
//     href: "/admin/dashboard/staff/staff-information/add-staff/academic",
//     current: false,
//   },
//   {
//     name: "Documents",
//     href: "/admin/dashboard/staff/staff-information/add-staff/documents",
//     current: false,
//   },
// ];
const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff Information",
    href: "/admin/dashboard/staff/staff-information/",
    current: false,
  },
  {
    name: "Add",
    href: "#",
    current: true,
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