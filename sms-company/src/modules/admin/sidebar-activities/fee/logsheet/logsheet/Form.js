import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Break from "../../break";
import Table from "./EntryTable";
export const Form = () => {
    const [entryType, setEntryType] = useState(false);
    const entryOnChange = (e) => {
        setEntryType({ entry: e.target.value });
    };
    return (_jsxs(_Fragment, { children: [_jsx(Break, { title: "Logsheet" }), _jsxs("form", { className: "my-6", children: [_jsx("input", { type: "radio", name: "entry", id: "normal", value: "normal", onChange: entryOnChange }), _jsx("label", { htmlFor: "normal", className: "ml-2 mr-6", children: "Normal entry" }), _jsx("input", { type: "radio", name: "entry", id: "discount", value: "discount", onChange: entryOnChange }), _jsx("label", { htmlFor: "discount", className: "ml-2", children: "Discount entry" })] }), _jsx(Table, { type: entryType })] }));
};
