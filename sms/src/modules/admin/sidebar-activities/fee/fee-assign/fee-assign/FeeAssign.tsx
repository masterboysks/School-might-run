import React from "react";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Fee" },
  {
    name: "Fee assign",
    href: "/fee/fee-assign/",
  },
];
export default function FeeAssign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
