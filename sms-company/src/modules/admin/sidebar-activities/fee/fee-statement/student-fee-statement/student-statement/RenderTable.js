import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const RenderTable = ({ currentItems, setOpen }) => {
    return (_jsx(_Fragment, { children: currentItems.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.date }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.billNo }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.paymentType }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.particular }), _jsxs("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: ["Rs.", person.dr] }), _jsxs("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: ["Rs.", person.cr] }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.balance }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: _jsx("span", { className: "cursor-pointer", onClick: () => {
                            setOpen(true);
                        }, children: "View" }) })] }, index))) }));
};
export default RenderTable;
