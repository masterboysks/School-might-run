import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";

import Form from "./Form";

function AddEvent() {
  const { date } = useParams();
  const pages = [
    { name: "Admin" },
    {
      name: "Event",
      href: "/admin/dashboard/admin/event-calender",
    },
    {
      name: "Add",
    },
    {
      name: date,
      href: `/admin/event/add/${date}`,
    },
  ];

  return (
    <div>
      <Breadnav pages={pages} />
      <Break title="Add event" />
      <Form date={date} />
    </div>
  );
}

export default AddEvent;
