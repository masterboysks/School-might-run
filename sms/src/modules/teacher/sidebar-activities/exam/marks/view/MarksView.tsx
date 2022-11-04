import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";

export default function MarksEntry() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Exam" },
    {
      name: "Exam marks",
      href: "/teacher/dashboard/exam/exam-marks/",
    },
    {
      name: `${classOfSchool}-${section}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
