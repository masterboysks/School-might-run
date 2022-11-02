import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Input, Password } from "../components/common/fields";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../api/common/Auth";
import { useState } from "react";
import AuthContext from "../contex/AuthProvider";
import { useContext } from "react";
// import Error from "../components/loginError/Error";
export default function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    // const { abc } = useParams();
    const { setAuth } = useContext(AuthContext);
    const [errorText, setErrorText] = useState("");
    // console.log(abc);
    const onSubmit = async (data) => {
        try {
            const res = await Auth.login(data);
            console.log(res);
            setAuth(res.data.data.token.access_token);
            localStorage.setItem("kcx", res.data.data.token.refresh_token);
            switch (res.data.data.meta.type) {
                case "student":
                    navigate("student/dashboard");
                    break;
                case "parent":
                    navigate("parent/dashboard");
                    break;
                case "teacher":
                    navigate("teacher/dashboard");
                    break;
                default:
                    navigate("admin/dashboard");
            }
        }
        catch (err) {
            err.response?.status == 422
                ? setErrorText("Invalid Credentials")
                : setErrorText("Server error");
        }
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: "min-w-[100vw] min-h-[100vh] flex items-center justify-center  bg-primary-grey-100 text-primary-grey  text-", children: _jsxs("div", { className: " md:flex-row box-border flex flex-col items-center justify-between w-11/12 max-w-5xl", children: [_jsxs("div", { className: "md:mr-3 md:max-w-md inline-flex flex-col justify-center flex-grow max-w-sm -mt-8", children: [_jsx(Link, { to: "/", children: _jsx("img", { src: "/logoHeader.png", width: 100, alt: "logo" }) }), _jsx("h1", { className: "text-primary-grey-600 my-12 text-2xl font-semibold text-left", children: "Amrit College Of Science And Technology" })] }), _jsxs("div", { className: " flex-grow max-w-sm", children: [_jsxs("form", { className: " rounded-xl box-border px-5 py-5 mx-auto my-3 bg-white shadow-2xl", onSubmit: handleSubmit(onSubmit), children: [errorText && _jsx("span", { className: "text-red-600", children: errorText }), _jsx(Input, { placeholder: "username", register: register, required: true, className: "mb-4", name: "username", errors: errors }), _jsx("br", {}), _jsx(Password, { placeholder: "Password", name: "password", register: register, type: "password", errorText: "Please enter password", errors: errors, className: "mb-4", required: true }), _jsx("br", {}), _jsx("button", { className: " focus:outline-none primary_btn w-full mb-5", type: "submit", children: "Login" }), _jsx(Link, { to: "forgot-password", replace: true, className: "text-primary-base focus:outline-none focus:ring-2 focus:ring-primary-base block text-center", children: "Forgot password?" })] }), _jsx("div", { className: " pt-8 text-center", children: _jsx("p", { className: " max-w-md", children: "Use the application according to policy rules. Any kinds of violations will be subject to sanctions." }) })] })] }) }) }));
}
