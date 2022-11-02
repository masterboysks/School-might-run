import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Breadnav from "../../../../../components/common/Breadnav";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Form from "./Form";
import Break from "../../../../../components/common/Break";
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
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsxs("div", { className: "w-1/3 flex items-center  border rounded-lg p-2 my-6 gap-5 text-primary-grey-600", children: [_jsx("div", { className: "w-1/3", children: _jsx(Doughnut, { data: data }) }), _jsx("div", { children: _jsxs("ul", { children: [_jsxs("li", { children: ["Total school days:", _jsx("span", { className: "text-primary-grey-700 font-medium", children: " 143" })] }), _jsxs("li", { children: ["Total present days:", _jsx("span", { className: "text-primary-grey-700 font-medium", children: " 123" })] }), _jsxs("li", { children: ["Total absent days:", _jsx("span", { className: "text-primary-grey-700 font-medium", children: " 20" })] })] }) })] }), _jsx(Break, { title: "Apply leave" }), _jsx(Form, {})] }));
}
