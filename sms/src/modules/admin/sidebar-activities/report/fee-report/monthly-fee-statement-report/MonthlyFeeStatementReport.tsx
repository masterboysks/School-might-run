import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Details from "./Details";
import Table from "./Table";

export default function ClassStatement() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Report", href: "#" },
    {
      name: "Fee Report",
      href: "#",
    },

    {
      name: classOfSchool + "-" + section,
      href: "#",
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Details />
      <Break title="Monthly fee statement"></Break>
      <Table></Table>
    </>
  );
}
