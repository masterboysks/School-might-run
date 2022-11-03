import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Push notification",
    href: "/admin/dashboard/admin/notice",
    current: true,
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