import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },
  {
    name: "Exam setup",
    href: "#",
    current: false,
  },
  {
    name: "Exam marks name",
    href: "/admin/dashboard/exam/exam-setup/exam-marks-name",
    current: true,
  },
];
export default function ExamMarksName() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
