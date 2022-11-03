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
    name: "Subject",
    href: "/admin/dashboard/admin/data-setup/subject",
  },
];
const Subject = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default Subject;
