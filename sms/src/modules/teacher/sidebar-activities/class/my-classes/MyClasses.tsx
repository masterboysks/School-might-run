import React from "react";
import Breadnav from "../../../../../components/common/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Class", href: "#", current: false },
  {
    name: "My classes",
    href: "/teacher/dashboard/class/my-classes/",
    current: true,
  },
];
export default function MyClasses() {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
}
