import React from "react";
import Breadnav from "../../../../../components/common/Breadnav";
import Break from "../../../../../components/common/Break";

import Form from "./Form";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Organization setup",
    href: "/admin/dashboard/admin/organization-setup",
    current: true,
  },
];
const OrginazationSetup = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Organization details" />
      <Form />
    </>
  );
};

export default OrginazationSetup;
