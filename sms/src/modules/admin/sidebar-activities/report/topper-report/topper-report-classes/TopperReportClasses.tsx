import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";

const pages = [
  { name: "Report", href: "#" },
  {
    name: "Topper Report",
    href: "/report/topper-report",
  },
];
export default function TopperReportClasses() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Form />
      <Table />
    </>
  );
}
