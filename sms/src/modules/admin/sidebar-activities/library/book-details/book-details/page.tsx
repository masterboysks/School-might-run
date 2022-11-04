import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
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
    </div>
  );
}
