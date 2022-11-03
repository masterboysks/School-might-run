import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Form from "./Form";

const pages = [
  { name: "Transportation", href: "#", current: false },
  {
    name: "Route setup",
    href: "/admin/dashboard/transport/route-setup/",
    current: false,
  },
  {
    name: "Add",
    href: "#",
    current: true,
  },
];
export default function RouteSetup() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add route details" />
      <Form></Form>
    </>
  );
}
