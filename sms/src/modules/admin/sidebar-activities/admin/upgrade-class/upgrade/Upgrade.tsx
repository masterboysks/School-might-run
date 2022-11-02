import Table from "./Table";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import React from "react";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Upgrade Class",
    href: "/admin/dashboard/admin/upgrade/",
    current: true,
  },
];

export default function Upgrade() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </div>
  );
}
