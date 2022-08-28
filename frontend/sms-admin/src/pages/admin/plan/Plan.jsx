import React from "react";
import MainLayout from "../../../layout/admin/MainLayout";
import BreadNav from "../../../components/admin/Breadnav";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PlanCard from "../../../components/admin/plan/PlanCard";
const plan = [
  {
    plan: "Basic",
    duration: "Unlimited",
    price: "0",
    modules: ["djk", "jhsda"],
  },
];
const plans = [
  {
    name: "Basics",
    price: "999",
    duration: "99:99",
    modules: ["djhsfg", "jdhf"],
  },
];
const pages = [{ name: "Plan", href: "#", current: true }];
export default function Plan() {
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
        {plans.map((c) => (
          <PlanCard
            defaultValues={c}
            key={c}
            name={c.name}
            price={c.price}
            duration={c.duration}
            modules={c.modules}
          />
        ))}
      </div>
    </>
  );
}
