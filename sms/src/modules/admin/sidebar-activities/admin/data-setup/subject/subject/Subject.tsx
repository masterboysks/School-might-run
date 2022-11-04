import React from "react";
import Breadnav from "../../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Admin" },
  {
    name: "Date setup",
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
