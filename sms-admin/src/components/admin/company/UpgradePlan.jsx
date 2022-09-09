import { PriceCheck } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Company from "../../../api/Company";
import Plans from "../../../api/Plans";
import Pagination from "../../commom/Pagination";

export default function UpgradePlan({
  plan,
  companyId,
  setPlanEditOpen,
  defaultValues,
  company,
  setCompany,
}) {
  const [plans, setPlans] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [editError, setEditError] = useState("");

  useEffect(() => {
    (async () => {
      const data = await Plans.get(page);
      const datas = data?.data?.data;
      console.log(datas);
      const temp = datas?.data.filter(
        (curr) => curr.status && curr.name !== plan
      );
      setPlans(temp);
      setPagination(datas.pagination);
      console.log(temp);
      console.log(data);
    })();
  }, [page]);
  const edited = (form) => {
    const temp = [...company];
    temp[temp.indexOf(defaultValues)] = { ...defaultValues, ...form };
    setCompany(temp);
    setPlanEditOpen(false);
  };
  const selectPlan = async (id, plan) => {
    try {
      const res = await Company.updatePlan({
        companyId,
        form: { plan_id: id },
      });

      res?.status === 201
        ? edited({
            plan_name: plan.name,
            max_users: plan.max_users,
            modules: plan.modules,
          })
        : setEditError("Failed to update company");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid  gap-5 bg-white rounded-md  pb-6 pt-3 max-w-3xl   mx-auto mt-4">
      <h1 className="text-lg  mt-5 ">Select Plan</h1>
      <div className="border-b "></div>
      {editError && <div className="text-red-500">{editError}</div>}
      <div className="overflow-auto">
        <table className="w-full ">
          <thead className=" text-primary-grey text-lg">
            <tr className="gap-2">
              <th className="font-normal break-words">Plan name</th>
              <th className="font-normal pl-4">Duration</th>
              <th className="font-normal pl-4">Max users</th>
              <th className="font-normal pl-4">Ammount</th>
              <th className="font-normal pl-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((curr) => {
              return (
                <tr key={curr.name} className="  text-primary-grey font-light">
                  <td className="break-words w-40">{curr.name}</td>
                  <td className="pl-4">{curr.duration}</td>
                  <td className="pl-4">{curr.max_users}</td>
                  <td className="pl-4">Rs. {curr.price}</td>
                  <td className="pl-4 flex ">
                    <button
                      className="rounded w-fit mt-5 px-1.5  py-1 secondary-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        selectPlan(curr.id, curr);
                      }}
                    >
                      <PriceCheck />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination pagination={pagination} setPage={setPage} />
    </div>
  );
}
