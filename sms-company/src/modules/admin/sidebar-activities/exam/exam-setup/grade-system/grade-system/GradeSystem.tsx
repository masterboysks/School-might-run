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
    name: "Grading system",
    href: "/admin/dashboard/exam/exam-setup/grading-system",
    current: true,
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
