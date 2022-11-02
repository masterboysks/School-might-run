import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Select } from "../../../../components/common/fields";
import design from "./pana.png";
import Table from "./Table";
const arrayDays = [
    { name: "Sun", id: 7 },
    { name: "Mon", id: 1 },
    { name: "Tue", id: 2 },
    { name: "Wed", id: 3 },
    { name: "Thur", id: 4 },
    { id: 5, name: "Fri" },
    { name: "Sat", id: 6 },
];
export default function Dashboard() {
    const { register } = useForm();
    return (_jsxs("div", { children: [_jsx("h1", { className: "text-xl font-medium text-primary-grey-700", children: "Dashboard" }), _jsxs("div", { className: " my-3 mx-auto bg-warning-50 rounded text-primary-grey-600 flex  px-3 py-1.5", children: [_jsxs("div", { className: "", children: [_jsxs("div", { className: "text-primary-grey-700", children: [_jsx("h2", { className: "text-lg", children: "Welcome," }), _jsx("h1", { className: "text-xl font-medium", children: "Shuvam Sherstha" })] }), _jsx("p", { className: "", children: "Check out your routine, notice, events and all other invoice and reciept easly online." })] }), _jsx("div", { className: "h-full py-3 object-cover", children: _jsx("img", { src: design, alt: "design" }) })] }), _jsxs("div", { className: "flex md:justify-between md:flex-row flex-col  space-y-3 md:space-y-0 md:items-end", children: [_jsx("div", { className: " md:w-52 ", children: _jsx(Select, { value: arrayDays, register: register, name: "day", label: "Class routine" }) }), _jsx("div", { className: "bg-primary-grey-900 text-white rounded py-2 px-5  h-fit mt-auto", children: "Preview whole routine" })] }), _jsx(Table, {})] }));
}
