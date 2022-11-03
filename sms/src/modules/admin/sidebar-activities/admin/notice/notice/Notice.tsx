import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Admin", href: "#" },
  {
    name: "Push notification",
    href: "/admin/dashboard/admin/notice",
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
