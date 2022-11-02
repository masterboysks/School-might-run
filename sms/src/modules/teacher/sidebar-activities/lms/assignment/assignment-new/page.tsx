import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";

export default function AssignmentNew() {
  const { name, id } = useParams();
  const pages = [
    { name: "Lms", href: "#", current: false },
    {
      name: "Assignment",
      href: "/teacher/dashboard/lms/assignment/",
      current: false,
    },
    {
      name,
      href: `/teacher/dashboard/lms/assignment/${name}`,
      current: false,
    },
    {
      name: "New assignment",
      href: "#",
      current: true,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
    </>
  );
}
