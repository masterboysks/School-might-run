import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../components/common/Breadnav";
import Table from "./Table";

export default function ExamDetails() {
  const { examName } = useParams();
  const pages = [
    { name: "Exam" },
    {
      name: "Exam marks",
      href: "/teacher/dashboard/exam/exam-marks/",
    },
    {
      name: examName,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      {/* level */}
      level
      {/*  */}
      <Table />
    </>
  );
}
