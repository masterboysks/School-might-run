import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Search from "@mui/icons-material/SearchOutlined";
import { useForm } from "react-hook-form";
import { Select } from "../../../../../components/common/fields";
const arrayLevel = [
    { name: "anish", id: 7 },
    { name: "saurav", id: 4 },
    { name: "asmita", id: 3 },
    { name: "prahlad", id: 2 },
];
const Form = () => {
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm();
    return (_jsx("div", { className: "ring-black ring-opacity-5 ring-1 form-solid mb-14 w-full p-4 my-6 rounded-md shadow", children: _jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { className: "", children: _jsx(Select, { value: arrayLevel, register: register, label: "Level", name: "level" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "CLass/Semester", register: register, name: "class", value: arrayLevel }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Faculty", register: register, name: "faculty", value: arrayLevel }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Section", register: register, name: "section", value: arrayLevel }) }), _jsx("div", { className: "col-span-full lg:col-span-2 xl:col-span-full", children: _jsx("div", { className: "bg-primary-btn h-fit w-fit hover: focus:outline-none focus:ring- focus:ring-offset-2 flex items-center justify-center p-2 ml-auto text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer", children: _jsx(Search, {}) }) })] }) }));
};
export default Form;
