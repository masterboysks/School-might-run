import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";

export default function StudentAttendanceReportClass() {
  const { classOfSchool, section } = useParams();
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
    {
      name: `${classOfSchool}-${section}`,
      href: "#",
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
