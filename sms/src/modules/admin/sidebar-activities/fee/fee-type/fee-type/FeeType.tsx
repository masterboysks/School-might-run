import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Fee", href: "#" },
  {
    name: "Fee type",
    href: "/fee/fee-type/",
  },
];
export default function FeeType() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
