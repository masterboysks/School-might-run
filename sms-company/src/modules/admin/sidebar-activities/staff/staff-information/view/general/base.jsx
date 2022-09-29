import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "../../Tabs";
const tabs = [
  {
    name: "General details",
    href: "",
    current: true,
  },
  {
    name: "Academic details",
    href: "/admin/dashboard/staff/staff-information/44/academic",
    current: false,
  },
  {
    name: "Documents",
    href: "/admin/dashboard/staff/staff-information/44/document",
    current: false,
  },
];
export default function ViewGeneral() {
  return (
    <>
      <Tabs tabs={tabs} />
      <div className="my-6">
        <Outlet />
      </div>
    </>
  );
}
