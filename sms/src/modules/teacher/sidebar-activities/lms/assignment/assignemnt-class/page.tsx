import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Table from "./Table";
import { useParams } from "react-router-dom";
import Form from "./Form";
export default function AssignmentClass() {
  const { name } = useParams();
  const pages = [
    { name: "Lms", href: "#", current: false },
    {
      name: "Assignment",
      href: "/teacher/dashboard/lms/assignment/",
      current: false,
    },
    {
      name,
      href: "#",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
      <Table />
    </>
  );
}
