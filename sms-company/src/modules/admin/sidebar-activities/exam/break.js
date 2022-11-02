import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Break = ({ title }) => {
    return (_jsx("div", { className: " my-10", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "-z-20 absolute inset-0 flex items-center", "aria-hidden": "true", children: _jsx("div", { className: "w-full border-t border-gray-300" }) }), _jsx("div", { className: "relative flex justify-start", children: _jsx("span", { className: "-z-10 pr-2 text-sm font-semibold text-gray-700 bg-white", children: title }) })] }) }));
};
export default Break;
