import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";

export default function AddSheduleExamShedule() {
  const { examName } = useParams();
  const pages = [
    { name: "Exam" },
    {
      name: "Exam shedule",
      href: "/admin/dashboard/exam/exam-shedule",
    },
    {
      name: examName,
      href: `/exam/exam-shedule/shedule/${examName}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
