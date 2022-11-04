import React from "react";
import Breadnav from "../../../../../components/common/navigation/Breadnav";
import Table from "./Table";
const pages = [
  { name: "Class" },
  {
    name: "My classes",
    href: "/teacher/dashboard/class/my-classes/",
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
