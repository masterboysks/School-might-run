import React from "react";
import Breadnav from "../../../../../components/common/navigation/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Transportation" },
  {
    name: "Student wise details",
    href: "/admin/dashboard/transport/student-wise-details/",
  },
];
export default function StudentWiseDetails() {
  return (
    <>
      <Breadnav pages={pages} />
      Search left its custonnm
      <Table />
    </>
  );
}
