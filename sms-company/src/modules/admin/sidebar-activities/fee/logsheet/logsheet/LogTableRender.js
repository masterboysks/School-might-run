import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const LogTableRender = ({ currentItems, setOpen }) => {
    return (_jsx(_Fragment, { children: currentItems.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.date }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.billNo }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.total <= 0
                        ? `(Rs.${Math.abs(person.total)})`
                        : `Rs.${person.total}` }), _jsxs("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: ["Rs.", person.paid] }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.due <= 0
                        ? `(Rs.${Math.abs(person.due)})`
                        : `Rs.${person.due}` }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: _jsx("span", { className: "cursor-pointer", onClick: () => {
                            setOpen(true);
                        }, children: "Details" }) })] }, index))) }));
};
export default LogTableRender;
