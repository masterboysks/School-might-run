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
    name: "Assign Subject",
    href: "/admin/dashboard/admin/data-setup/assign-subject",
  },
];
const AssignSubject = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default AssignSubject;
