import React from "react";
import { useState } from "react";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../Break";
import Form from "./Form";
import Table from "./Table";

const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff attendance",
    href: "/staff/staff-attendance/",
    current: true,
  },
];
function StaffAttendance() {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);

  const onSubmit = async (data, page = 1) => {
    (async () => {
      const res = await staffAPI.search(page, data);
      setData(res?.data?.data?.data);
    })();
  };

  return (
    <>
      <Breadnav pages={pages} />
      <Form onSubmit={onSubmit}></Form>
      <Break title="Attendance" />
      <Table data={data}></Table>
    </>
  );
}

export default StaffAttendance;
