import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Class" },
  {
    name: "Classess",
    href: "/teacher/dashboard/class/classess/",
  },
];
export default function Classess() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* level search */}
      Level
      <Table />
    </>
  );
}
