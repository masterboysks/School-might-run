import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
import { DeleteModalContex } from "../../../../../../contex/admin/common/ContexForDeleteModal";
import { useContext } from "react";
import noticeApi from "../../../../../../api/admin/dashboard/admin/noticeApi";
import { Link } from "react-router-dom";
const RenderTable = ({ currentItems }) => {
    const value = useContext(DeleteModalContex);
    const deleteFunction = async (id) => {
        const res = await noticeApi.delete(id);
        res.status === 204 && setData(currentItems.filter((d) => d.id != id));
    };
    const handleDelete = (id, name, inUse) => {
        value.setValue({
            func: deleteFunction,
            id: id,
            message: `You want to delete ${name} ?`,
            heading: "notice",
            inUse,
        });
    };
    return (_jsx(_Fragment, { children: currentItems.map((person, index, table) => (_jsxs("tr", { children: [_jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.entry_date }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.title }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person?.send_to?.length > 1
                        ? person?.send_to?.join(" ,")
                        : person?.send_to }), _jsx("td", { className: "whitespace-nowrap text-primary-btn px-3 py-4 text-sm", children: person.document ? (_jsx("a", { href: person.document, target: "_blank", rel: "noopener noreferrer", children: "View" })) : ("") }), _jsx("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: person.expiry_date }), _jsx("td", { className: "whitespace-nowrap relative text-sm text-gray-500", children: _jsxs(Popover, { children: [_jsx(Popover.Button, { children: _jsx(ThreeDots, {}) }), _jsxs(Popover.Panel, { className: ` -left-full absolute z-10 bg-white divide-y-2 rounded shadow-lg cursor-pointer
                 ${index + 1 < table.length ? "top-0" : "bottom-0"}`, children: [_jsx("div", { onClick: () => {
                                            console.log(person);
                                            localStorage.setItem("Mb5sVJt5Qp", JSON.stringify({
                                                send_to: person.send_to,
                                                title: person.title,
                                                description: person.description,
                                                document: person.document,
                                                expiry_date: person.expiry_date,
                                            }));
                                        }, className: "p-3", children: _jsx(Link, { to: `${person.id}/${person.title}`, children: "Edit" }) }), _jsx("button", { onClick: () => {
                                            handleDelete(person.id, person.title, person.in_use);
                                        }, className: "p-3", children: "Delete" })] })] }) })] }, index))) }));
};
export default RenderTable;
