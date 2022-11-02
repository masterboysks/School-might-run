import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
import { useState, useEffect } from "react";
import { InputNumber } from ".";
import "./datepicker.css";
function ad_bs({ selected, setSelected, label, defaultDate = "" }) {
    const format = localStorage.getItem("hdjkjkfg");
    const [render, setRender] = useState(1);
    const handleDate = ({ bsDate }) => {
        setSelected({ date: bsDate });
    };
    useEffect(() => {
        setRender((c) => c + 1);
    }, [defaultDate]);
    if (format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002")
        return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: "my-6  text-sm ", children: label }), _jsx("br", {})] })), render && (_jsx(Calendar, { onChange: handleDate, defaultDate: defaultDate || 0, language: "en", className: `mt-[6px] w-full fff  rounded focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm ` }, render))] }));
    useEffect(() => {
        if (defaultDate) {
            setSelected(defaultDate);
        }
        else
            setSelected(new Date().toISOString().split("T")[0]);
    }, [defaultDate]);
    return (_jsxs(_Fragment, { children: [label && (_jsxs(_Fragment, { children: [_jsx("label", { className: "my-6 text-sm ", children: label }), _jsx("br", {})] })), _jsx("input", { className: `mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm `, value: selected, onChange: (e) => setSelected(e.target.value), type: "date" })] }));
}
export default ad_bs;
export const bs_ad_year = (props) => {
    const format = localStorage.getItem("hdjkjkfg");
    return (_jsx(InputNumber, { placeholder: "2005", ...props, name: `${props.name}`, min: format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002" ? 2000 : 1950, max: format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002" ? 2089 : 2029, step: "1", label: `${props.label}(${format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002" ? "BS" : "AD"})` }));
};
