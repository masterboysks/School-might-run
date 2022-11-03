import React from "react";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Break from "../../../../../../../components/common/Break";
import Form from "./Form";
const pages = [
  { name: "Exam", href: "#" },
  {
    name: "Exam setup",
    href: "#",
  },
  {
    name: "Grading system",
    href: "/admin/dashboard/exam/exam-setup/grading-system",
  },
  {
    name: "Add",
    href: "/admin/dashboard/exam/exam-setup/grading-system/add",
  },
];
export default function AddGradeSystem() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add grade system"></Break>
      <Form></Form>
    </>
  );
}
