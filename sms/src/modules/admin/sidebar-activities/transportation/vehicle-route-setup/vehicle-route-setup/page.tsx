import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Transportation", href: "#" },
  {
    name: "Vehicle route setup",
    href: "/admin/dashboard/transport/vehicle-route-setup/",
  },
];
export default function VehicleRouteSetup() {
  return (
    <>
      <Breadnav pages={pages} />
      Search left its custonnm
      <Table></Table>
    </>
  );
}
