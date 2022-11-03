import React from "react";
import Breadnav from "../../../../../../components/common/Breadnav";
import Calendar from "./Calendar";
const pages = [
  { name: "Admin", href: "#" },
  {
    name: "Event",
    href: "/admin/dashboard/admin/event-calender",
  },
];
function Event() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Calendar />
    </div>
  );
}

export default Event;
