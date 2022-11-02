import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Arrow from "@mui/icons-material/ArrowForwardIos";
const setupLinks = [
    {
        name: "Exam name",
        path: "/admin/dashboard/exam/exam-setup/exam-name",
    },
    {
        name: "Grade system setup",
        path: "/admin/dashboard/exam/exam-setup/grading-system",
    },
    {
        name: "Exam marks name",
        path: "/admin/dashboard/exam/exam-setup/exam-marks-name",
    },
    {
        name: "Assign mark",
        path: "/admin/dashboard/exam/exam-setup/assign-mark",
    },
];
const Slidebar = () => {
    const [dropdownSetupActive, setDropdownSetupActive] = useState(true);
    const [setup, setSetup] = useState(false);
    const location = useLocation().pathname;
    useEffect(() => {
        location.includes("/admin/dashboard/exam/exam-setup")
            ? setSetup(true)
            : setSetup(false);
    }, [location]);
    let nav;
    const sidebar = () => {
        nav = document.getElementById("sidebar").classList;
        nav.contains("hidden") ? nav.remove("hidden") : nav.add("hidden");
        slidebar();
    };
    const slidebar = () => {
        nav = document.getElementById("sidebar").classList;
        let overlay = document.getElementById("overlay") &&
            document.getElementById("overlay").classList;
        const slidebar = document.getElementById("slidebar") &&
            document.getElementById("slidebar").classList;
        slidebar &&
            (slidebar.contains("hidden") && !nav.contains("hidden")
                ? slidebar.remove("hidden")
                : slidebar.add("hidden"));
        overlay &&
            (!slidebar.contains("hidden")
                ? overlay.remove("hidden")
                : overlay.add("hidden"));
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "min-w-[216px]  mt-[2px] box-border text-primary-grey-600 border-r-[1px] z-[99] border-r-primary-grey-100-grey-200 bg-primary-grey-100 fixed top-16 md:static   ml-[72px] md:ml-0 h-[94vh] pb-20 overflow-y-auto hidden lg:inline ", id: "slidebar", children: _jsx("div", { className: "w-full", children: _jsxs("ul", { className: "pt-9 mx-2", children: [_jsxs("li", { onClick: () => {
                                    setDropdownSetupActive(!dropdownSetupActive);
                                }, className: `flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
            ${setup ? "text-primary-grey-700" : "text-primary-grey-600"} 
                 ${setup && !dropdownSetupActive
                                    ? "bg-primary-grey-200 "
                                    : "text-primary-grey-600"}text-sm`, children: [_jsx("div", { id: "arrow", className: `devList text-black  transition duration-100 ease-in text-sm ${dropdownSetupActive ? "rotate-90" : ""}  `, children: _jsx(Arrow, { fontSize: "sm" }) }), _jsx("div", { className: " text-sm", children: "Exam setup" })] }), _jsx("ul", { className: `${dropdownSetupActive ? "" : "hidden"} transition duration-700 ease-in`, id: "dropdown", children: setupLinks.map((curr) => {
                                    return (_jsx(Link, { to: curr.path, onClick: sidebar, children: _jsx("li", { className: `pl-6  pr-3    mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${location.includes(curr.path)
                                                ? "bg-primary-grey-200 text-primary-grey-700"
                                                : "hover:bg-primary-grey-200 text-primary-grey-600"}`, children: curr.name }) }, curr.name));
                                }) }), _jsx(Link, { to: "/admin/dashboard/exam/marks-ledger", onClick: sidebar, children: _jsxs("li", { className: ` flex p-1 mt-2 mb-3  pr-3     cursor-pointer rounded ${location.includes("/admin/dashboard/exam/marks-ledger")
                                        ? " bg-primary-grey-200  text-primary-grey-700 "
                                        : " hover:bg-primary-grey-200 text-primary-grey-600 "} text-sm`, children: [_jsx("div", { className: "devList text-primary-grey-300", children: _jsx(Arrow, { fontSize: "sm" }) }), "Marks Ledger"] }) }), _jsx(Link, { to: "/admin/dashboard/exam/exam-shedule", onClick: sidebar, children: _jsxs("li", { className: ` flex p-1 mt-2 mb-3   pr-3    cursor-pointer rounded ${location.includes("/admin/dashboard/exam/exam-shedule")
                                        ? " bg-primary-grey-200  text-primary-grey-700 "
                                        : " hover:bg-primary-grey-200 text-primary-grey-600 "} text-sm`, children: [_jsx("div", { className: "devList text-primary-grey-300", children: _jsx(Arrow, { fontSize: "sm" }) }), "Exam shedule"] }) }), _jsx(Link, { to: "/admin/dashboard/exam/admit-card", onClick: sidebar, children: _jsxs("li", { className: ` flex p-1 mt-2 mb-3   pr-3    cursor-pointer rounded ${location.includes("/admin/dashboard/exam/admit-card")
                                        ? " bg-primary-grey-200  text-primary-grey-700 "
                                        : " hover:bg-primary-grey-200 text-primary-grey-600 "} text-sm`, children: [_jsx("div", { className: "devList text-primary-grey-300", children: _jsx(Arrow, { fontSize: "sm" }) }), "Admit card"] }) })] }) }) }), _jsx("div", { className: " sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1", children: _jsx("div", { className: "top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full", children: _jsx("div", { className: "-z-10 sm:mt-9 w-11/12 mx-auto text-sm", children: _jsx(Outlet, {}) }) }) }), _jsx("div", { className: "lg:hidden overscroll-none opacity-95 fixed top-0  z-[99999] left-[288px] hidden w-full h-screen bg-transparent", id: "overlay", onClick: sidebar })] }));
};
export default Slidebar;
