import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Exam" },
  {
    name: "Exam setup",
  },
  {
    name: "Exam name",
    href: "/admin/dashboard/exam/exam-setup/assign-mark",
  },
];
export default function AssignExam() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
