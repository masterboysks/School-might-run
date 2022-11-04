import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";

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
    {
      name: "Add",
      href: `/exam/exam-shedule/shedule/${examName}/add`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Break title="Exam schedule"></Break>
      <Form>
        <Table />
      </Form>
    </>
  );
}
