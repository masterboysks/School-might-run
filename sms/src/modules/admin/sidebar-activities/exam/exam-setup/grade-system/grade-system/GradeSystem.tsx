import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Exam" },
  {
    name: "Exam setup",
  },
  {
    name: "Grading system",
    href: "/admin/dashboard/exam/exam-setup/grading-system",
  },
];
export default function GradeSyatem() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table></Table>
    </>
  );
}
