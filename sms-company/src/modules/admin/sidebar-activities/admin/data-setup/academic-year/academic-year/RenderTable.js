import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
import { DeleteModalContex } from "../../../../../../../contex/admin/common/ContexForDeleteModal";
import { useContext } from "react";
import academicyearApi from "../../../../../../../api/admin/dashboard/admin/data-setup/academicyearApi";
import { Link } from "react-router-dom";
const RenderTable = ({ currentItems, setData }) => {
    const value = useContext(DeleteModalContex);
    const deleteFunction = async (id) => {
        const res = await academicyearApi.delete(id);
        res.status === 204 && setData(currentItems.filter((d) => d.id != id));
    };
    const handleDelete = (id, name, inUse) => {
        value.setValue({
            func: deleteFunction,
            id: id,
            message: `You want to delete ${name} ?`,
            heading: "academic year",
            inUse,
        });
    };
    return (_jsx(_Fragment, { children: currentItems.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.academicYear }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.isRunning ? "True" : "False" }), _jsx("td", { className: "whitespace-nowrap relative text-sm text-gray-500", children: _jsxs(Popover, { children: [_jsx(Popover.Button, { children: _jsx(ThreeDots, {}) }), _jsxs(Popover.Panel, { className: ` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
                 ${index + 1 < table.length ? "top-0" : "bottom-0"}`, children: [" ", _jsx("div", { onClick: () => {
                                            console.log(person);
                                            localStorage.setItem("Mb5sVJt5Qp", JSON.stringify({
                                                is_running: person.is_running,
                                                academic_year: person.academic_year,
                                            }));
                                        }, className: "p-3", children: _jsx(Link, { to: `${person.id}/${person.academic_year}`, children: "Edit" }) }), _jsx("button", { onClick: () => {
                                            handleDelete(person.id, person.academicYear, person.in_use);
                                        }, className: "p-3", children: "Delete" })] })] }) })] }, index))) }));
};
export default RenderTable;
