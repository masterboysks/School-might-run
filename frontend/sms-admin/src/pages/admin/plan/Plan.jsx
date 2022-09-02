import React, { useEffect, useState } from "react";
import BreadNav from "../../../components/admin/Breadnav";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PlanCard from "../../../components/admin/plan/PlanCard";
import Plans from "../../../api/Plans";

const pages = [{ name: "Plan", href: "#", current: true }];
export default function Plan() {
  const [plans, setPlans] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await Plans.getPlans(page);
        setPlans(data?.data?.data);
        console.log(data.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const Delete = (id) => {
    const temp = plans.filter((c) => c.id !== id);
    console.log(temp);
  };

  return (
    <>
      <BreadNav pages={pages} />
      <div className="flex justify-between mt-3">
        <h1 className="text-lg">Manage Plan</h1>
        <Link
          to="add"
          className=" text-white icon w-fit bg-primary-base/80 rounded h-fit p-1"
        >
          <AddIcon />
        </Link>
      </div>
      <div className="main grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 my-6 gap-3 ">
        {plans?.map((c) => (
          <PlanCard
            defaultValues={c}
            key={c.id}
            max_user={c.max_users}
            status={c.status}
            name={c.name}
            price={c.price}
            duration={c.duration}
            modules={c.modules}
            del={Delete}
          />
        ))}
      </div>
    </>
  );
}
