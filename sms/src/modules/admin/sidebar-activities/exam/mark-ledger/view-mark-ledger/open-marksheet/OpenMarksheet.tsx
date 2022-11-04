import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Details from "./Details";
import Table from "./Table";

export default function OpenMarksheet() {
  const { classOfSchool, section, studentName, studentId } = useParams();
  const pages = [
    { name: "Exam" },

    {
      name: "Marksledger",
      href: "/admin/dashboard/exam/marks-ledger",
    },
    {
      name: `${classOfSchool} - ${section}`,
      href: `/exam/marks-ledger/view/${classOfSchool}/${section}`,
    },
    {
      name: studentName,
      href: `/exam/marks-ledger/view/${classOfSchool}/${section}/${studentName}/${studentId}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Table />
    </>
  );
}
