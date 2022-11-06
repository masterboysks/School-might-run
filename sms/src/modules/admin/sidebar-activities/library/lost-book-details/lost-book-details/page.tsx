import React from "react";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Library" },
  {
    name: "Lost book details",
    href: "/admin/dashboard/library/lost-book-details",
  },
];
export default function LostBookDetails() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* search */}
      <Table></Table>
    </>
  );
}
