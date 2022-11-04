import React from "react";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Transportation" },
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
      <Table />
    </>
  );
}
