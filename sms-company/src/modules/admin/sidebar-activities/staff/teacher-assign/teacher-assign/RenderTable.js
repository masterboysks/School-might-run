import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
const RenderTable = ({ currentItems }) => {
    return (_jsx(_Fragment, { children: currentItems.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.id }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.name }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.department }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.designation }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.assignedSubject }), _jsx("td", { className: "whitespace-nowrap relative text-sm text-gray-500", children: _jsxs(Popover, { children: [_jsx(Popover.Button, { children: _jsx(ThreeDots, {}) }), _jsxs(Popover.Panel, { className: ` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
                 ${index + 1 < table.length ? "top-0" : "bottom-0"}`, children: [_jsx("div", { className: "p-3", children: "Edit" }), _jsx("div", { className: "p-3", children: "Delete" })] })] }) })] }, index))) }));
};
export default RenderTable;
