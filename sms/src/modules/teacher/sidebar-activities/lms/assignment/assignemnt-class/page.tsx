import React from "react";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Table from "./Table";
import { useParams } from "react-router-dom";
import Form from "./Form";
export default function AssignmentClass() {
  const { name } = useParams();
  const pages = [
    { name: "Lms" },
    {
      name: "Assignment",
      href: "/teacher/dashboard/lms/assignment/",
    },
    {
      name,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
