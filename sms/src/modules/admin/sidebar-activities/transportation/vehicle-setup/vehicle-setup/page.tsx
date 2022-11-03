import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Transportation", href: "#" },
  {
    name: "Vehicle setup",
    href: "/admin/dashboard/transport/vehicle-setup/",
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
