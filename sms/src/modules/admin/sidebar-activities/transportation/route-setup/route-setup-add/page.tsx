import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Form from "./Form";

const pages = [
  { name: "Transportation", href: "#" },
  {
    name: "Route setup",
    href: "/admin/dashboard/transport/route-setup/",
  },
  {
    name: "Add",
    href: "#",
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
