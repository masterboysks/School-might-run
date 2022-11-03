import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Fee", href: "#" },
  {
    name: "Fee assign",
    href: "/fee/fee-assign/",
  },
];
export default function FeeAssign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
