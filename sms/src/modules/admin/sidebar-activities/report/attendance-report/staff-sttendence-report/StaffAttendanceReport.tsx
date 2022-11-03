import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Report", href: "#" },
  {
    name: "Attendance report",
    href: "#",
  },
  {
    name: "Staff attendance report",
    href: "/report/attendance-report/staff-attendance-report",
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
