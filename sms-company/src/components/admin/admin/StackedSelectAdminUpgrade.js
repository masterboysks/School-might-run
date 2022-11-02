import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default function StackedSelectAdminUpgrade({ label, nameTop, nameBottom, valueTop, valueBottom, selectedTop, setSelectedTop, selectedBottom, setSelectedBottom, dataTitleTop, dataValueTop, dataTitleBottom, dataValueBottom, errorTop, setErrorTop, errorBottom, setErrorBottom, disabled, }) {
    let optionsTop;
    selectedTop === "Select"
        ? (optionsTop = ["Select", ...valueTop])
        : (optionsTop = [...valueTop]);
    let optionsBottom;
    selectedBottom === "Select"
        ? (optionsBottom = ["Select", ...valueBottom])
        : (optionsBottom = [...valueBottom]);
    const [optionalTop, optionalBottom] = [{}, {}];
    dataTitleTop &&
        (optionalTop[dataTitleTop] = dataValueTop) &&
        (optionalBottom[dataTitleBottom] = dataValueBottom);
    return (_jsxs(_Fragment, { children: [_jsx("label", { className: `my-6 text-sm ${(errorTop || errorBottom) && " text-red-600"}`, children: label }), _jsxs("div", { className: "flex-1 ml-1", children: [_jsx("select", { name: nameTop, onClick: () => errorTop && setErrorTop(false), disabled: disabled && "disabled", onChange: (e) => {
                            setSelectedTop(e.target.value);
                        }, value: selectedTop, ...optionalTop, className: `w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm  ${disabled && " bg-primary-grey-100 "}`, children: optionsTop.map((curr) => (_jsx("option", { value: curr, children: curr }, curr))) }), _jsx("select", { name: nameBottom, onClick: () => errorBottom && setErrorBottom(false), disabled: disabled && "disabled", onChange: (e) => {
                            setSelectedBottom(e.target.value);
                        }, value: selectedBottom, ...optionalBottom, className: `w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm ${disabled && " bg-primary-grey-100 "}`, children: optionsBottom.map((curr) => (_jsx("option", { value: curr, children: curr }, curr))) }), (errorTop || errorBottom) && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-xs font-light text-red-600", children: "This is a required field." }), _jsx("br", {})] }))] })] }));
}
