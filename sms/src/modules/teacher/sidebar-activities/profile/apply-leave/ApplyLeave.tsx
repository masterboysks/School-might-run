import React from "react";
import Breadnav from "../../../../../components/common/Breadnav";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Form from "./Form";
import Break from "../../../../../components/common/Break";
const pages = [
  { name: "Profile" },
  {
    name: "Apply leave",
    href: "/teacher/dashboard/profile/apply-leave/",
  },
];

ChartJS.register(ArcElement, Tooltip);
const data = {
  labels: ["Present", "Absent"],
  datasets: [
    {
      label: "Present absent days",
      data: [80, 20],
      backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
      hoverOffset: 4,
    },
  ],
};
export default function ApplyLeave() {
  return (
    <>
      <Breadnav pages={pages} />
      {/* Chart */}
      <div className="w-1/3 flex items-center  border rounded-lg p-2 my-6 gap-5 text-primary-grey-600">
        <div className="w-1/3">
          <Doughnut data={data} />
        </div>
        <div>
          <ul>
            <li>
              Total school days:
              <span className="text-primary-grey-700 font-medium"> 143</span>
            </li>
            <li>
              Total present days:
              <span className="text-primary-grey-700 font-medium"> 123</span>
            </li>
            <li>
              Total absent days:
              <span className="text-primary-grey-700 font-medium"> 20</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Form */}
      <Break title="Apply leave" />
      <Form />
    </>
  );
}
