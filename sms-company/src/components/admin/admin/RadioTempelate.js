import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Break from "../../common/Break";
function RadioTempelate({ value, templateName, templateLabel, title, textBtn, selected, setSelected, dataTitle, dataValue, }) {
    const optional = {};
    dataTitle && (optional[dataTitle] = dataValue);
    const handleChange = (e) => {
        const target = e.target;
        if (target.checked) {
            setSelected(target.value);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "mb-3", children: _jsx(Break, { title: title }) }), templateLabel || "Select a tempelate : ", _jsx("form", { className: " md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md", children: value.map((value) => (_jsxs("div", { className: " relative", children: [_jsxs("label", { htmlFor: value, className: "w-fit z-[1] relative flex mx-auto", children: [_jsx("img", { src: value, alt: templateName, className: "h-44 w-fit object-cover" }), _jsx("input", { id: value, type: "radio", name: templateName, value: value, checked: selected === value, onChange: handleChange, ...optional, className: " -right-2 -top-2 absolute" })] }), _jsx("div", { className: " absolute top-0 grid w-full h-full", children: _jsx("a", { rel: "noopener noreferrer", target: "_blank", href: value, className: " justify-self-center z-20 p-2 my-auto bg-white rounded-lg", children: textBtn || "View" }) })] }, value))) })] }));
}
export default RadioTempelate;
