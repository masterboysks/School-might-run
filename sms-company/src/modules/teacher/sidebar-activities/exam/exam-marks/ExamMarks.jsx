import React from "react";
import Breadnav from "../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Exam marks",
    href: "/teacher/dashboard/exam/exam-marks/",
    current: true,
  },
];
export default function ExamMarks() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
