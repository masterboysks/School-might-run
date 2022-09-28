import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import staffAPI from "../../../../../../api/admin/dashboard/staff/staffAPI";
import Tabs from "../Tabs";
const tabs = [
  {
    name: "General details",
    href: "",
    current: true,
  },
  {
    name: "Academic details",
    href: "",
    current: false,
  },
  {
    name: "Documents",
    href: "",
    current: false,
  },
];
export default function ViewStaff() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await staffAPI.personalGet(id);
        console.log(res.data.data);
        setData(res?.data?.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <div className="flex gap-6">
        <div className="rounded-full overflow-hidden object-cover h-24 w-24 border">
          <img src={data?.profile_picture} alt={data?.first_name} />
        </div>
        <div className="">
          <div className="text-lg text-primary-grey-700 font-medium tracking-wide ">
            <span className="capitalize">{data?.first_name}</span>
            {"  "}
            {data?.last_name}
          </div>
          <div className="">{data?.email}</div>
        </div>
      </div>
      <Tabs tabs={tabs} />
      <div className="my-6">
        <Outlet />
      </div>
    </>
  );
}
