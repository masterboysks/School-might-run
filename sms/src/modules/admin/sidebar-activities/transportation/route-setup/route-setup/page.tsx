import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Transportation", href: "#" },
  {
    name: "Route setup",
    href: "/admin/dashboard/transport/route-setup/",
  },
];
export default function RouteSetup() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
