import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Report", href: "#", current: false },
  {
    name: "Attendance report",
    href: "#",
    current: false,
  },
  {
    name: "Staff attendance report",
    href: "/report/attendance-report/staff-attendance-report",
    current: true,
  },
];
export default function StaffAttendanceReport() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
      <Table />
    </>
  );
}
