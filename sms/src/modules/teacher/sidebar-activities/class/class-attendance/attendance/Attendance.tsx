import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Table from "./Table";
import Form from "./Form";

export default function Attendance() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Class" },
    {
      name: "Classess",
      href: "/teacher/dashboard/class/classess/",
    },
    {
      name: `${classOfSchool}-${section}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Attendance" />
      <Form />
      <Table />
    </>
  );
}
