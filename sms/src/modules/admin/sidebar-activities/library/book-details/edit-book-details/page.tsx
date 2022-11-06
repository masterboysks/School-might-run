import React from "react";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Tabs from "../../../../../../components/common/navigation/Tabs";
import Form from "./Form";
const tabs = [
  {
    name: "Edit book details",
    href: "",
    current: true,
  },
  {
    name: "Edit shelf details",
    href: `/admin/dashboard/library/book-details/edit-shelf-details`,
    current: false,
  },
];
const pages = [
  { name: "Library" },
  {
    name: "Book details",
    href: "/admin/dashboard/admin/class-schedule/",
  },
  {
    name: "Edit Book details",
    href: "/admin/dashboard/admin/class-schedule/edit-book-details",
  },
];
export default function EditBookDetails() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <Tabs tabs={tabs} />
      <Form />
    </>
  );
}
