import React from "react";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Transportation" },
  {
    name: "Route setup",
    href: "/admin/dashboard/transport/route-setup/",
  },
];
export default function RouteSetup() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
