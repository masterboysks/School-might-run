import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import profile from "./profile.png";
import { useParams } from "react-router-dom";
import Table from "./Table";
import Breadnav from "../../../../../../../components/common/Breadnav";
export default function StudentStatement() {
    const { student } = useParams();
    const pages = [
        { name: "Fee", href: "#", current: false },
        {
            name: "Fee statement",
            href: "#",
            current: false,
        },
        {
            name: "Student fee statement",
            href: "/fee/fee-statement/student-fee-statement",
            current: true,
        },
        {
            name: `${student.split("-")[0][0].toUpperCase() +
                student.split("-")[0].substring(1)}'s logsheet`,
            href: "/fee/fee-statement/student-fee-statement",
            current: true,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsxs("div", { className: " my-6", children: [_jsx("div", { className: "w-fit my-3 ml-auto", children: _jsx("div", { className: "primary_btn", children: "Pay now" }) }), _jsxs("div", { className: "md:flex ring-black ring-opacity-5 ring-1 form-solid p-4 rounded-md shadow", children: [_jsx("img", { src: profile, alt: "Ranjit sherstha", className: "md:mr-2 h-fit mx-auto rounded" }), _jsx("div", { className: "flex-1", children: _jsxs("div", { className: "md:grid-cols-2 gap-x-5 gap-y-2 xl:grid-cols-3 grid grid-cols-1", children: [_jsx("span", { className: "md:text-start col-span-full text-primary-grey-700 text-lg font-medium text-center", children: "Ranjit Sherstha" }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Student ID:" }), _jsx("span", { className: "text-primary-grey-700", children: "1234" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Class/semester:" }), _jsx("span", { className: "text-primary-grey-700", children: "Nursery" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Guardain name:" }), _jsx("span", { className: "text-primary-grey-700", children: "Shyam sherstha" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Addmission date:" }), _jsx("span", { className: "text-primary-grey-700", children: "2022/02/01" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Faculty:" }), _jsx("span", { className: "text-primary-grey-700" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Gurdain number:" }), _jsx("span", { className: "text-primary-grey-700", children: "9800223300" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Status:" }), _jsx("span", { className: "text-primary-grey-700", children: "Active" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Sub-faculty:" }), _jsx("span", { className: "text-primary-grey-700" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Relation:" }), _jsx("span", { className: "text-primary-grey-700", children: "Brother" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Student number:" }), _jsx("span", { className: "text-primary-grey-700" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600", children: "Section:" }), _jsx("span", { className: "text-primary-grey-700", children: "B" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ", children: [_jsx("span", { className: "text-primary-grey-600 ", children: "Mail:" }), _jsx("span", { className: "text-primary-grey-700", children: "abc@hotmail.com" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 md:border-none", children: [_jsx("span", { className: "text-primary-grey-600", children: "Student number:" }), _jsx("span", { className: "text-primary-grey-700", children: "9818756958" })] }), _jsxs("div", { className: " flex justify-between py-2", children: [_jsx("span", { className: "text-primary-grey-600", children: "Roll no:" }), _jsx("span", { className: "text-primary-grey-700", children: "22" })] })] }) })] })] }), _jsx(Table, {})] }));
}
