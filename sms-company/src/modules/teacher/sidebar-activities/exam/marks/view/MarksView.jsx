import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";

export default function MarksEntry() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Exam", href: "#", current: false },
    {
      name: "Exam marks",
      href: "/teacher/dashboard/exam/exam-marks/",
      current: false,
    },
    {
      name: `${classOfSchool}-${section}`,
      href: "#",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
