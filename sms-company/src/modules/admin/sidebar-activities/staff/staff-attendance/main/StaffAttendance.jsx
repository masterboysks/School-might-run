import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../Break";
import Form from "./Form";
import Table from "./Table";

const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff attendance",
    href: "/staff/staff-attendance/",
    current: true,
  },
];
function StaffAttendance() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
      <Break title="Attendance" />
      <Table></Table>
    </>
  );
}

export default StaffAttendance;
