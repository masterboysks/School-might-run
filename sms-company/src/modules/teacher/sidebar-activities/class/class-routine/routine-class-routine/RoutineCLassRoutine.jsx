import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";

export default function RoutineCLassRoutine() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Class", href: "#", current: false },
    {
      name: "Class routine",
      href: "/teacher/dashboard/class/class-routine/",
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
