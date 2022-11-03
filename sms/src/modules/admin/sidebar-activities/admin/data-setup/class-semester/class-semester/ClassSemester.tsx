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
    name: "Class/Semester",
    href: "/admin/dashboard/admin/data-setup/class-semester",
  },
];
const ClassSemester = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default ClassSemester;
