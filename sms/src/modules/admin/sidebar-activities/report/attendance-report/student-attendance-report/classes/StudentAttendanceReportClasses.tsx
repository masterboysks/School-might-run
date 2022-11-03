import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Report", href: "#" },
  {
    name: "Attendance report",
    href: "#",
  },
  {
    name: "Student attendance report",
    href: "/report/attendance-report/student-attendance-report",
  },
];
export default function StudentAttendanceReportClasses() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
