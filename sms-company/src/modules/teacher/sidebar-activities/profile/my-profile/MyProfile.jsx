import React from "react";
import Breadnav from "../../../../components/common/Breadnav";
import Details from "./Details";
const pages = [
  { name: "Profile", href: "#", current: false },
  {
    name: "My profile",
    href: "/teacher/dashboard/profile/my-profile/",
    current: false,
  },
];
export default function MyProfile() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Details />
    </>
  );
}
