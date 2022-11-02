import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Class from "@mui/icons-material/SchoolOutlined";
import Profile from "@mui/icons-material/SupervisorAccountOutlined";
import Exam from "@mui/icons-material/QuizOutlined";
import Lms from "@mui/icons-material/AppRegistrationOutlined";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "@mui/icons-material/MenuOutlined";
let activity = [
    { name: "Profile", value: Profile, path: "profile/my-profile" },
    { name: "Class", value: Class, path: "class/my-classes" },
    { name: "Exam", value: Exam, path: "exam/exam-marks" },
    { name: "LMS", value: Lms, path: "lms/assignment" },
];
export default function Sidebar({ modules }) {
    // activity = activity.filter((c) => modules?.includes(c.name));
    // useEffect(() => {
    //   const esc = document.addEventListener("keydown", (e) => {
    //     e.key === "Escape" && sidebar();
    //   });
    //   return () => {
    //     document.removeEventListener("keydown", esc);
    //   };
    // });
    const location = useLocation().pathname.toLowerCase();
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
    return (_jsxs("div", { className: "md:pt-9 sm:relative min-w-[72px] border-r-[1px]", children: [_jsx("div", { className: "sm:hidden ml-[11px] p-1 mt-1 rounded-md text-primary-grey-600   top-3 left-16 focus:outline-none  fixed  z-[100] ", children: _jsx(Hamburger, { onClick: sidebar }) }), _jsx("div", { className: "min-w-[72px] overflow-y-auto mt-[2px] py-8 border-r-[1px]  pb-20 border-r-primary-grey-100-grey-200 top-[64px] md:static z-10 fixed  h-screen text-sm sm:inline hidden bg-white ", id: "sidebar", children: activity.map((curr) => {
                    return (_jsx("div", { className: ` w-[60px] text-center text-xs rounded py-1 my-4 mx-auto hover:bg-primary-grey-100 z-50 opacity-100  ${location.includes(`teacher/dashboard/${curr.name.toLowerCase()}/`)
                            ? "  bg-primary-grey-100 text-primary-grey-700"
                            : " text-primary-grey-600 "}`, onClick: () => {
                            sidebar();
                        }, children: _jsxs(Link, { to: curr.path, tabIndex: -1, className: location.includes(`teacher/dashboard/${curr.name.toLowerCase()}/`)
                                ? "pointer pointer-events-none"
                                : " ", children: [_jsx(curr.value, { className: ` mx-auto ${location.includes(`teacher/dashboard/${curr.name.toLowerCase()}/`)
                                        ? "text-primary-grey-700"
                                        : "text-primary-grey-400"}` }), _jsx("div", { className: " text-inherit", children: curr.name })] }) }, curr.name));
                }) })] }));
}
