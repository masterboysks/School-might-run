import React from "react";
import Breadnav from "../../../../../../../components/common/navigation/Breadnav";
import Break from "../../../../../../../components/common/Break";
import Form from "./Form";
const pages = [
  { name: "Exam" },
  {
    name: "Exam setup",
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
      <Break title="Add grade system" />
      <Form />
    </>
  );
}
