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
    name: "Faculty",
    href: "/admin/dashboard/admin/data-setup/faculty",
  },
];
const Faculty = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default Faculty;
