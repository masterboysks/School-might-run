import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "../modules/admin/navbar/Navbar";
import Sidebar from "../modules/admin/sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authorized, axiosPrivate } from "../api/common/axios";
import AuthContext from "../contex/AuthProvider";
import { useContext } from "react";
import Info from "../api/admin/Info";
import Auth from "../api/common/Auth";
import { useState } from "react";
import Delete from "../components/common/dialog-modal/Delete";
const AdminMain = () => {
    const { setAuth, auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [sidebarData, setSidebarData] = useState([]);
    let modules;
    const myInterceptor = authorized.interceptors.response.use((config) => {
        return config;
    }, async (err) => {
        if (err?.response?.status !== 401)
            return Promise.reject(err);
        const originalConfig = err?.config;
        if (localStorage.getItem("kcx")) {
            try {
                const { data } = await Auth.refresh(localStorage.getItem("kcx"));
                if (data.data.refresh_token && data.data.access_token) {
                    setAuth(data.data.access_token);
                    localStorage.setItem("kcx", data?.data?.refresh_token);
                    originalConfig.headers["Authorization"] = `Bearer ${data.data.access_token}`;
                    authorized.defaults.headers.Authorization = `Bearer ${data.data.access_token}`;
                    return axiosPrivate(originalConfig);
                }
            }
            catch (error) {
                error.response.status === 400 && localStorage.removeItem("kcx");
            }
        }
    });
    useEffect(() => {
        localStorage.getItem("kcx") || navigate("/");
        try {
            (async () => {
                try {
                    authorized.defaults.headers.Authorization = `Bearer ${auth}`;
                    modules = await Info.get();
                    console.log(modules);
                    setSidebarData(modules.data?.data?.modules);
                    if (!modules)
                        throw { message: "Modules not found", status: "404" };
                    modules && setLoading(false);
                }
                catch (e) {
                    // console.log(e);
                    navigate("/");
                }
            })();
        }
        catch (error) {
            // console.log(error);
            navigate("/");
        }
        // return () => {
        //   localStorage.removeItem("kcx");
        //   authorized.interceptors.response.eject(myInterceptor);
        // };
    }, []);
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "md:flex w-full text-primary-grey-600", children: [_jsx(Delete, {}), _jsx(Sidebar, { modules: sidebarData }), _jsx(Outlet, {})] })] }));
};
export default AdminMain;
