import React from "react";
import Breadnav from "../../../../../components/common/Breadnav";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
const pages = [
  { name: "Profile", href: "#", current: false },
  {
    name: "Apply leave",
    href: "/teacher/dashboard/profile/apply-leave/",
    current: true,
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
      <div className="w-1/3 flex items-center  border rounded p-2 my-6">
        <div className="w-1/3">
          <Doughnut data={data} />
        </div>
        <div>
          <ul>
            <li>Total school days:143</li>
            <li>Total present days:123</li>
            <li>Total absent days:20</li>
          </ul>
        </div>
      </div>
    </>
  );
}
