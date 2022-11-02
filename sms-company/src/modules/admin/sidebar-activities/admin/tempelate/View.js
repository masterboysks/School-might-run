import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function View({ photo, templateId, templateName }) {
    return (_jsxs("div", { className: " relative", children: [_jsxs("label", { htmlFor: templateId, className: "w-fit z-[1] relative flex mx-auto", children: [_jsx("img", { src: photo, alt: templateName, className: "h-44 w-fit object-none" }), _jsx("input", { id: templateId, type: "radio", name: templateName, className: " -right-2 -top-2 absolute" })] }), _jsx("div", { className: " absolute top-0 grid w-full h-full", children: _jsx("a", { rel: "noopener noreferrer", target: "_blank", href: photo, className: " justify-self-center z-20 p-2 my-auto bg-white rounded-lg", children: "View" }) })] }));
}
export default View;
