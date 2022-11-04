import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Tables from "./Table";
const pages = [
  { name: "Admin" },
  {
    name: "Date setup",
  },
  {
    name: "Section",
    href: "/admin/dashboard/admin/data-setup/section",
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
