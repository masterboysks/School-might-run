import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import { Link, useNavigate } from "react-router-dom";
import { Input, InputDisabled, MultipleSelect, Textarea, Upload, } from "../../../../../../components/common/oldFields";
import { useState } from "react";
function AddEvent() {
    const { date } = useParams();
    const pages = [
        { name: "Admin", href: "#", current: false },
        {
            name: "Event",
            href: "/admin/dashboard/admin/event-calender",
            current: false,
        },
        {
            name: "Add",
            href: "#",
            current: false,
        },
        {
            name: date,
            href: `/admin/event/add/${date}`,
            current: true,
        },
    ];
    return (_jsxs("div", { children: [_jsx(Breadnav, { pages: pages }), _jsx(Break, { title: "Add event" }), _jsx(Form, { date: date })] }));
}
export default AddEvent;
function Form({ date }) {
    const arraySendTo = ["All", ...["jkdsf", "jfhdgf", "jhfdg"]];
    const [eventTitle, setEventTitle] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [sendTo, setSendTo] = useState([arraySendTo[0]]);
    const [document, setDocument] = useState("");
    const [errorEventTitle, setErrorEventTitle] = useState(false);
    const [errorEventDescription, setErrorEventDescription] = useState(false);
    const [errorStartTime, setErrorStartTime] = useState(false);
    const [errorEndTime, setErrorEndTime] = useState(false);
    const [errorSendTo, setErrorSendTo] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log({
            eventTitle,
            eventDescription,
            startTime,
            endTime,
            sendTo,
            document,
        });
        let temp = false;
        eventTitle || ((temp = true) && setErrorEventTitle(true));
        eventDescription || ((temp = true) && setErrorEventDescription(true));
        startTime || ((temp = true) && setErrorStartTime(true));
        endTime || ((temp = true) && setErrorEndTime(true));
        sendTo.length === 0 && (temp = true) && setErrorSendTo(true);
        temp || navigate("/admin/event-calender");
    };
    return (_jsx("div", { children: _jsxs("form", { className: "form-solid w-full my-4 space-y-4 rounded-md", children: [_jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "col-span-2", children: _jsx(InputDisabled, { label: "Selected date", value: date, type: "date" }) }) }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "col-span-2", children: _jsx(Input, { label: "Event title*", value: eventTitle, setValue: setEventTitle, error: errorEventTitle, setError: setErrorEventTitle }) }) }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "col-span-2", children: _jsx(Textarea, { label: "Event description*", placeholder: " Description here", id: "event_description", value: eventDescription, setValue: setEventDescription, error: errorEventDescription, setError: setErrorEventDescription }) }) }), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsx("div", { children: _jsx(Input, { label: "Start time*", type: "time", id: "start_time", value: startTime, setValue: setStartTime, error: errorStartTime, setError: setErrorStartTime }) }), _jsx("div", { children: _jsx(Input, { label: "End time*", type: "time", id: "end_time", value: endTime, setValue: setEndTime, error: errorEndTime, setError: setErrorEndTime }) })] }), _jsxs("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: [_jsxs("div", { children: [_jsx(MultipleSelect, { value: arraySendTo, label: "Send to*", selected: sendTo, setSelected: setSendTo, error: errorSendTo, setError: setErrorSendTo }), "Note:You can select to multiple items"] }), _jsxs("div", { children: [_jsx(Upload, { label: "Document", id: "document_form", value: document, setValue: setDocument }), _jsx("br", {})] })] }), _jsx("div", { className: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4", children: _jsx("div", { className: "md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto", children: _jsxs("div", { className: " w-fit", children: [_jsx(Link, { to: "/admin/dashboard/admin/event-calender ", className: "secondary_btn", children: "Cancel" }), _jsx("div", { onClick: handleSubmit, className: "primary_btn", children: "Save" })] }) }) })] }) }));
}
