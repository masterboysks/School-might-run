import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Input } from "../../../../../../../components/common/oldFields";
export default function RenderTable({ index, inputFiled, setInputFiled, inputFields, }) {
    const handleChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFiled(data);
    };
    return (_jsxs("tr", { children: [_jsx("td", { className: "p-2", children: _jsx(Input, { placeholder: "80", name: "lowerLimit", type: "number", value: inputFiled.lowerLimit, onChange: (e) => handleChange(index, e) }) }), _jsx("td", { className: "p-2", children: _jsx(Input, { name: "upperLimit", placeholder: "90", type: "number", value: inputFiled.upperLimit, onChange: (e) => {
                        handleChange(index, e);
                    } }) }), _jsx("td", { className: "p-2", children: _jsx(Input, { placeholder: "A", name: "grade", value: inputFiled.grade, onChange: (e) => {
                        handleChange(index, e);
                    } }) }), _jsx("td", { className: "p-2", children: _jsx(Input, { placeholder: "4", name: "gpa", type: "number", value: inputFiled.gpa, onChange: (e) => {
                        handleChange(index, e);
                    }, step: "0.1" }) }), _jsx("td", { children: index === 0 ? (_jsx(_Fragment, {})) : (_jsx("div", { className: " text-primary-grey-700 w-fit p-1 mx-1 bg-white rounded-full shadow", onClick: () => {
                        setInputFiled(inputFields.slice(0, -1));
                    }, children: _jsx(CloseOutlinedIcon, { fontSize: "inherit" }) })) })] }));
}
