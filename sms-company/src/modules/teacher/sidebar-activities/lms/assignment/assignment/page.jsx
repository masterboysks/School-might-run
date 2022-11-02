import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Lms", href: "#", current: false },
  {
    name: "Assignment",
    href: "/teacher/dashboard/lms/assignment/",
    current: true,
  },
];
export default function Assignment() {
  return (
    <>
      <Breadnav pages={pages} />
      aaignnent search
      <Table />
    </>
  );
}
