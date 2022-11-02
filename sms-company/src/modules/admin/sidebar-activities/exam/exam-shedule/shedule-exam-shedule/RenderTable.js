import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
export default function RenderTable({ person, selectedPeople, setSelectedPeople, table, index, }) {
    return (_jsxs("tr", { className: selectedPeople.includes(person) ? "bg-gray-50" : undefined, children: [_jsxs("td", { className: "sm:w-16 sm:px-8 relative w-12 px-6", children: [selectedPeople.includes(person) && (_jsx("div", { className: "absolute inset-y-0 left-0 w-0.5 bg-primary-btn" })), _jsx("input", { type: "checkbox", className: "left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md", value: person.invoiceStatus, checked: selectedPeople.includes(person), onChange: (e) => setSelectedPeople(e.target.checked
                            ? [...selectedPeople, person]
                            : selectedPeople.filter((p) => p !== person)) })] }), _jsx("td", { className: "whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500", children: person.class }), _jsx("td", { className: "whitespace-nowrap text-primary-grey-600 px-3 py-4 text-sm", children: person.faculty }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.level }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.start }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.end }), _jsx("td", { className: "whitespace-nowrap relative text-sm text-gray-500", children: _jsxs(Popover, { children: [_jsx(Popover.Button, { children: _jsx(ThreeDots, {}) }), _jsxs(Popover.Panel, { className: ` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
                 ${index + 1 < table.length ? "top-0" : "bottom-0"}`, children: [_jsx("div", { className: "p-3", children: _jsx(Link, { to: `#`, children: "View" }) }), _jsx("div", { className: "p-3", children: _jsx(Link, { to: `#`, children: "Edit" }) })] })] }) })] }));
}
