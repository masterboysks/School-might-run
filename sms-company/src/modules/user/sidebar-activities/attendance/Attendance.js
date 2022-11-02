import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import Table from "./Table";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Form from "./Form";
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
export default function Attendance() {
    let [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("h1", { className: "text-xl font-medium text-primary-grey-700", children: "Attendance" }), _jsxs("div", { className: "flex flex-col sm:flex-row", children: [_jsxs("div", { className: " w-full sm:w-2/3 lg:w-1/3 flex items-center  border rounded-lg p-2 my-6 gap-5 text-primary-grey-600", children: [_jsx("div", { className: "w-1/3", children: _jsx(Doughnut, { data: data }) }), _jsx("div", { children: _jsxs("ul", { children: [_jsxs("li", { children: ["Total school days:", _jsx("span", { className: "text-primary-grey-700 font-medium", children: "143" })] }), _jsxs("li", { children: ["Total present days:", _jsx("span", { className: "text-primary-grey-700 font-medium", children: "123" })] }), _jsxs("li", { children: ["Total absent days:", _jsx("span", { className: "text-primary-grey-700 font-medium", children: " 20" })] })] }) })] }), _jsx("button", { onClick: openModal, className: "primary_btn h-fit mt-auto sm:ml-3 mb-6", children: "Apply for leave" })] }), _jsx(Table, {})] }), _jsx(Transition, { appear: true, show: isOpen, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-10", onClose: closeModal, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-black bg-opacity-25" }) }), _jsx("div", { className: "fixed inset-0 overflow-y-auto", children: _jsx("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: _jsxs(Dialog.Panel, { className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all", children: [_jsx(Dialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-primary-grey-700 ", children: "Apply for leave" }), _jsx(Form, {})] }) }) }) })] }) })] }));
}
