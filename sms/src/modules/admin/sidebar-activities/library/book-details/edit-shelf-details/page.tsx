import React from "react";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Tabs from "../../../../../../components/common/navigation/Tabs";
import Form from "./Form.tsx";
const tabs = [
  {
    name: "Edit book details",
    href: "/admin/dashboard/library/book-details/edit-book-details",
    current: false,
  },
  {
    name: "Edit shelf details",
    href: `#`,
    current: true,
  },
];
const pages = [
  { name: "Library" },
  {
    name: "Book details",
    href: "/admin/dashboard/admin/class-schedule/",
  },
  {
    name: "Edit shelf details",
    href: "/admin/dashboard/admin/class-schedule/edit-shelf-details",
  },
];
export default function EditShelfDetails() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Tabs tabs={tabs} />
      <Form />
    </>
  );
}
