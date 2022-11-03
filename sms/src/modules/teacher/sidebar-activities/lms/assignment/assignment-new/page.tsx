import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";

export default function AssignmentNew() {
  const { name, id } = useParams();
  const pages = [
    { name: "Lms", href: "#" },
    {
      name: "Assignment",
      href: "/teacher/dashboard/lms/assignment/",
    },
    {
      name,
      href: `/teacher/dashboard/lms/assignment/${name}`,
    },
    {
      name: "New assignment",
      href: "#",
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
    </>
  );
}
