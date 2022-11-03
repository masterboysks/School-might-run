import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";

export default function ExamReportClass() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Report", href: "#" },
    {
      name: "Exam report",
      href: "/report/exam-report",
    },

    {
      name: `${classOfSchool}-${section}`,
      href: "#",
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Form />
      <Table />
    </>
  );
}
