import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Input } from "../../../../../../components/common/fields";
import { InputDisabled } from "../../../../../../components/common/fields";
const RenderTable = ({ currentItems, register }) => {
    return (_jsx(_Fragment, { children: currentItems?.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.class }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: _jsx(Input, { type: "number", register: register, name: "theoryof" + person.class }) }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: _jsx(Input, { type: "number", register: register, name: "theoryof" + person.class }) }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: _jsx(Input, { type: "number", register: register, name: "theoryof" + person.class }) }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: _jsx(InputDisabled, { type: "number", register: register, name: "theoryof" + person.class }) })] }, index))) }));
};
export default RenderTable;
