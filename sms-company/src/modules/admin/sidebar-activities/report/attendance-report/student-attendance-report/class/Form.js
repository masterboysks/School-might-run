import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Search from "@mui/icons-material/SearchOutlined";
import { Input } from "../../../../../../../components/common/oldFields";
export default function Form() {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [errorFromDate, setErrorFromDate] = useState(false);
    const [errorToDate, setErrorToDate] = useState(false);
    const handleSubmit = () => {
        console.log({ fromDate, toDate });
        fromDate || setErrorFromDate(true);
        toDate || setErrorToDate(true);
    };
    return (_jsx("div", { className: "mt-11 lg:w-2/3 w-full", children: _jsxs("div", { className: "xl:flex ring-black ring-opacity-5 ring-1 form-solid p-4 my-6 rounded-md shadow", children: [_jsxs("div", { className: "md:grid-cols-2 grid flex-1 grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Input, { value: fromDate, setValue: setFromDate, error: errorFromDate, setError: setErrorFromDate, label: "From date*", type: "date" }) }), _jsx("div", { className: "", children: _jsx(Input, { value: toDate, setValue: setToDate, error: errorToDate, setError: setErrorToDate, label: "To date*", type: "date" }) }), _jsx("div", { className: "md:mx-0 md:ml-auto h-fit w-fit md:col-span-2 bg-primary-btn md:box-content xl:hidden box-border px-4 py-3 mt-auto ml-auto text-center text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto", onClick: handleSubmit }) })] }), _jsx("div", { className: "w-fit h-fit bg-primary-btn xl:block box-border hidden px-2 py-2 mt-auto ml-3 text-center text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 ml-auto", onClick: handleSubmit }) })] }) }));
}
