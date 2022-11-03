import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
  { name: "Fee", href: "#" },
  {
    name: "Fee assign",
    href: "/fee/fee-assign/",
  },
];
export default function Assign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Class info" />
      <Form />
    </>
  );
}
