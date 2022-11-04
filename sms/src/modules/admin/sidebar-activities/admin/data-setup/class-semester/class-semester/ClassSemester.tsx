import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Admin" },
  {
    name: "Date setup",
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
