import React from "react";
import Breadnav from "../../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Library" },
  {
    name: "Lend books",
    href: "/admin/dashboard/admin/class-schedule/",
  },
];
export default function LendBook() {
  return (
    <>
      <Breadnav pages={pages} />
      search left
      <Table />
    </>
  );
}
