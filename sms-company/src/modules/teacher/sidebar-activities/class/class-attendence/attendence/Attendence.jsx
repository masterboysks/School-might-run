import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import Table from "./Table";
import Form from "./Form";

export default function Attendence() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Class", href: "#", current: false },
    {
      name: "Classess",
      href: "/teacher/dashboard/class/classess/",
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
      <Break title="Attendence" />
      <Form />
      <Table />
    </>
  );
}
