import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../Break";
import Form from "./Form";
import Table from "./Table";

const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff attendence",
    href: "/staff/staff-attendence/",
    current: true,
  },
];
function StaffAttendence() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
      <Break title="Attendence" />
      <Table></Table>
    </>
  );
}

export default StaffAttendence;
