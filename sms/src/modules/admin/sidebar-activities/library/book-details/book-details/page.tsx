import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Library" },
  {
    name: "Book details",
    href: "/admin/dashboard/admin/class-schedule/",
  },
];
export default function BookDetails() {
  return (
    <div>
      <Breadnav pages={pages} />
      search
      <Table></Table>
    </div>
  );
}
