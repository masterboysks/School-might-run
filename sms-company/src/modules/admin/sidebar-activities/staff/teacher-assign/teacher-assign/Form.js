import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Search from "@mui/icons-material/SearchOutlined";
import { useForm } from "react-hook-form";
import { Select } from "../../../../../../components/common/fields";
const arrayLevel = [{ id: 1, name: "hlo" }];
function Form() {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    return (_jsxs("form", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow", children: [_jsx("div", { className: "", children: _jsx(Select, { label: "Level*", value: arrayLevel, register: register, name: "level" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Class/Semester*", value: arrayLevel, register: register, name: "class" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Faculty", value: arrayLevel, register: register, name: "faculty" }) }), _jsx("div", { className: "", children: _jsx(Select, { label: "Section*", value: arrayLevel, register: register, name: "section" }) }), _jsx("div", { className: "h-fit w-fit bg-primary-btn xl:col-span-4 sm:col-span-2 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer", children: _jsx(Search, { className: "w-4 mx-auto" }) })] }));
}
export default Form;
