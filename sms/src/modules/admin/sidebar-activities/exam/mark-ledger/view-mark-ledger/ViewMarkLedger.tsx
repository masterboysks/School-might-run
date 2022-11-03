import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Details from "./Details";
import Table from "./Table";

export default function ViewMarkLedger() {
  const { section, classOfSchool } = useParams();
  const pages = [
    { name: "Exam", href: "#" },

    {
      name: "Marksledger",
      href: "/admin/dashboard/exam/marks-ledger",
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
      <Table />
    </>
  );
}
