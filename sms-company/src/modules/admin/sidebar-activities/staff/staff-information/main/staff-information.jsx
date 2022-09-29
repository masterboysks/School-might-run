import Table from "./table";
import Form from "./form";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import { useState } from "react";
import { useEffect } from "react";

const Staffs = () => {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);

  const onSubmit = async (data) => {
    (async () => {
      const res = await staffAPI.search(page, data);
      setPagination(res?.data?.data?.pagination);
      setData(res?.data?.data?.data);
    })();
  };
  return (
    <>
      <Form onSubmit={onSubmit} page={page} />

      <Table setPage={setPage} data={data} pagination={pagination} />
    </>
  );
};

export default Staffs;
