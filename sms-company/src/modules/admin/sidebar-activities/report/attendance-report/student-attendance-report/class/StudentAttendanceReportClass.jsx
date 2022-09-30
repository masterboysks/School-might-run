import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";

export default function StudentAttendanceReportClass() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Report", href: "#", current: false },
    {
      name: "Attendance report",
      href: "#",
      current: false,
    },
    {
      name: "Student attendance report",
      href: "/report/attendance-report/student-attendance-report",
      current: false,
    },
    {
      name: `${classOfSchool}-${section}`,
      href: "#",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details></Details>
      <Form />
      <Table />
    </>
  );
}
