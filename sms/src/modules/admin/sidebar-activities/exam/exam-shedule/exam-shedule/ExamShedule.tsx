import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Exam" },
  {
    name: "Exam schedule",
    href: "/admin/dashboard/exam/exam-shedule",
  },
];
export default function ExamShedule() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Table />
    </>
  );
}
