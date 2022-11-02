import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function RenderTable({ currentItems, setOpen }) {
    return (_jsx(_Fragment, { children: currentItems.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.id }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.name }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.roll_no }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.submitted_date }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.points }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: _jsx("span", { className: "cursor-pointer", onClick: () => {
                            setOpen(true);
                        }, children: "View" }) })] }, index))) }));
}
