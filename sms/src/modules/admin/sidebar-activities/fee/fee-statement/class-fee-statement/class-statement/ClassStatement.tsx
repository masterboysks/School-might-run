import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/navigation/Breadnav";
import Break from "../../../break";
import Details from "./Details";
import Table from "./Table";

export default function ClassStatement() {
  const { classOfSchool } = useParams();
  const pages = [
    { name: "Fee" },
    {
      name: "Fee statement",
    },
    {
      name: "Class fee statement",
      href: "/fee/fee-statement/class-fee-statement",
    },
    {
      name: `${classOfSchool.substring(0, 1).toUpperCase()}${classOfSchool
        .substring(1)
        .split("-")
        .slice(0, -1)
        .join(" ")}-${`${classOfSchool
        .substring(1)
        .split("-")
        .slice(-1)}`.toUpperCase()}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Break title="Fee statement" />
      <Table />
    </>
  );
}
