import React from "react";
import Breadnav from "../../../../../../../components/common/navigation/Breadnav";
import Tabs from "../../../../../../../components/common/navigation/Tabs";
import Form from "./Form";
const pages = [
  { name: "Library" },
  {
    name: "Lost book details",
    href: "/admin/dashboard/library/lost-book-details",
  },
  {
    name: "Add Lost book details",
  },
];
const tabs = [
  {
    name: "Lost/damaged by Organization",
    href: "/admin/dashboard/library/lost-book-details/lost-book-organization",
    current: false,
  },
  {
    name: "Lost/damage by member/staff",
    href: ``,
    current: true,
  },
];
export default function LostBookMember() {
  return (
    <>
      <Breadnav pages={pages} />
      <Tabs tabs={tabs} />
      <Form />
    </>
  );
}
