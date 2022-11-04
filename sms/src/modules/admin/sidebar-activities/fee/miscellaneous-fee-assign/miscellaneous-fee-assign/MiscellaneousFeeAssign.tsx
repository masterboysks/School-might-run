import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Fee" },
  {
    name: "Miscellaneous fee assign",
    href: "/fee/miscellaneous-fee-assign",
  },
];
function Notice() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Table></Table>
    </div>
  );
}

export default Notice;
