import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Admin", href: "#" },
  {
    name: "Date setup",
    href: "#",
  },
  {
    name: "Designation",
    href: "/admin/dashboard/admin/data-setup/designation",
  },
];
const Designation = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default Designation;
