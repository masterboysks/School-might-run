import React from "react";
import Breadnav from "../../../../../components/common/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Transportation", href: "#", current: false },
  {
    name: "Student wise details",
    href: "/admin/dashboard/transport/student-wise-details/",
    current: true,
  },
];
export default function StudentWiseDetails() {
  return (
    <>
      <Breadnav pages={pages} />
      Search left its custonnm
      <Table></Table>
    </>
  );
}
