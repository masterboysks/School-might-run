import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#" },
  {
    name: "Exam setup",
    href: "#",
  },
  {
    name: "Exam name",
    href: "/admin/dashboard/exam/exam-setup/exam-name",
  },
];
export default function ExamName() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
