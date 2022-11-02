import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import photo from "./Rectangle 4369.png";
import photo1 from "./Rectangle 4370.png";
import { Link } from "react-router-dom";
import Breadnav from "../../../../../components/common/Breadnav";
import RadioTempelate from "../../../../../components/admin/admin/RadioTempelate";
import { useState } from "react";
const pages = [
    { name: "Admin", href: "#", current: false },
    {
        name: "Template",
        href: "/admin/dashboard/admin/template",
        current: true,
    },
];
function Temeplate() {
    const arrayExamRoutine = [photo, photo, photo, photo];
    const arrayRecieptTempelate = [photo, photo, photo, photo];
    const arrayInvoiceTempelate = [photo, photo, photo, photo];
    const arrayStudentId = [photo, photo, photo, photo];
    const arrayTeacherId = [photo1, photo1, photo1, photo1];
    const arrayClassRoutine = [photo1, photo1, photo1, photo1];
    const arrayMarksheet = [photo, photo, photo, photo];
    const arrayAdmitCard = [photo, photo, photo, photo];
    const [admitCard, setAdmitCard] = useState(arrayAdmitCard[0]);
    const [marksheet, setMarksheet] = useState(arrayMarksheet[0]);
    const [classRoutine, setClassRoutine] = useState(arrayClassRoutine[0]);
    const [teacherId, setTeacherId] = useState(arrayTeacherId[0]);
    const [studentId, setStudentId] = useState(arrayStudentId[0]);
    const [invoiceTempelate, setInvoiceTempelate] = useState(arrayInvoiceTempelate[0]);
    const [recieptTempelate, setRecieptTempelate] = useState(arrayRecieptTempelate[0]);
    const [examRoutine, setExamRoutine] = useState(arrayExamRoutine[0]);
    return (_jsxs(_Fragment, { children: [_jsx(Breadnav, { pages: pages }), _jsx(RadioTempelate, { title: "Exam routine tempelate", value: arrayExamRoutine, selected: examRoutine, setSelected: setExamRoutine, templateName: "exam_routine_tempelate", id: "id_exam_routine_tempelate" }), _jsx(RadioTempelate, { title: "Admit card tempelate", value: arrayAdmitCard, selected: admitCard, setSelected: setAdmitCard, templateName: "admit_card_tempelate", id: "id_admit_card_tempelate" }), _jsx(RadioTempelate, { title: "Marksheet tempelate", value: arrayMarksheet, selected: marksheet, setSelected: setMarksheet, templateName: "markheet_tempelate", id: "id__marksheet_tempelate" }), _jsx(RadioTempelate, { title: "Class routine tempelate", value: arrayClassRoutine, selected: classRoutine, setSelected: setClassRoutine, templateName: "class_routine_tempelate", id: "id_class_routine_tempelate" }), _jsx(RadioTempelate, { title: "Teacher ID card tempelate", value: arrayTeacherId, selected: teacherId, setSelected: setTeacherId, templateName: "teacher_id_tempelate", id: "id_teacher_id_tempelate" }), _jsx(RadioTempelate, { title: "Student ID card tempelate", value: arrayStudentId, selected: studentId, setSelected: setStudentId, templateName: "student_id_tempelate", id: "id_student_id_tempelate" }), _jsx(RadioTempelate, { title: "Invoice tempelate", value: arrayInvoiceTempelate, selected: invoiceTempelate, setSelected: setInvoiceTempelate, templateName: "invoice_tempelate", id: "id_invoice_tempelate" }), _jsx(RadioTempelate, { title: "Reciept tempelate", value: arrayRecieptTempelate, selected: recieptTempelate, setSelected: setRecieptTempelate, templateName: "reciept_tempelate", id: "id_reciept_tempelate" }), _jsx("div", { className: "w-full mt-6 mb-12", children: _jsxs("div", { className: " w-fit my-auto ml-auto", children: [_jsx(Link, { to: "/admin/dashboard/admin/template", className: "secondary_btn", children: "Cancel" }), _jsx(Link, { to: "/admin/dashboard/admin/template", className: "primary_btn", children: "Save" })] }) })] }));
}
export default Temeplate;
