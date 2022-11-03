import React from "react";
import { useState } from "react";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../Break";
import Form from "./Form";
import Table from "./Table";

const pages = [
  { name: "Staff", href: "#" },
  {
    name: "Staff attendance",
    href: "/staff/staff-attendance/",
  },
];
function StaffAttendance() {
  const [message, setMessage] = useState("Search for Data");
  const [data, setData] = useState([]);

  const onSubmit = async (data, page = 1) => {
    (async () => {
      const res = await staffAPI.search(page, data);
      res.status === 204 && setMessage("No data was found.");
      setData(res?.data?.data?.data);
    })();
  };

  return (
    <>
      <Breadnav pages={pages} />
      <Form onSubmit={onSubmit}></Form>
      <Break title="Attendance" />
      {data.length === 0 ? (
        <div className="my-6 w-full text-center font-medium text-primary-grey-700 text-3xl">
          {message}
        </div>
      ) : (
        <Table data={data}></Table>
      )}
    </>
  );
}

export default StaffAttendance;
