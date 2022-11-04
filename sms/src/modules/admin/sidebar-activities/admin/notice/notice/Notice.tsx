import React from "react";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Admin" },
  {
    name: "Push notification",
    href: "/admin/dashboard/admin/notice",
  },
];
function Notice() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Table />
    </div>
  );
}

export default Notice;
