import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";

export default function RoutineCLassRoutine() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Class", href: "#" },
    {
      name: "Class routine",
      href: "/teacher/dashboard/class/class-routine/",
    },
    {
      name: `${classOfSchool}-${section}`,
      href: "#",
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
