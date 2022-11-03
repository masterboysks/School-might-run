import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Tables from "./Table";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Section",
    href: "/admin/dashboard/admin/data-setup/section",
    current: true,
  },
];
const Section = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Tables />
    </>
  );
};

export default Section;