import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Class", href: "#", current: false },
  {
    name: "Class routine",
    href: "/teacher/dashboard/class/class-routine/",
    current: true,
  },
];
export default function ClassRoutine() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* Level search */}
      Level
      <Table />
    </>
  );
}
