import React from "react";
import Breadnav from "../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Class", href: "#", current: false },
  {
    name: "Classess",
    href: "/teacher/dashboard/class/classess/",
    current: true,
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
