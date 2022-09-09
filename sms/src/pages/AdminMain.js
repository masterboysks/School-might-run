import Navbar from "../modules/admin/navbar/Navbar";
import Sidebar from "../modules/admin/sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authorized, axiosPrivate } from "../api/axios";
import AuthContext from "../contex/AuthProvider";
import { useContext } from "react";
import Info from "../api/admin/Info";
import Auth from "../api/Auth";
import { useState } from "react";

const AdminMain = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  let modules;
  authorized.interceptors.response.use(
    (config) => {
      return config;
    },
    async (err) => {
      const originalConfig = err?.config;

      if (err?.response?.status === 401 && localStorage.getItem("kcx")) {
        try {
          const { data } = await Auth.refresh(localStorage.getItem("kcx"));
          if (data.data.refresh_token && data.data.access_token) {
            setAuth(data.data.access_token);
            localStorage.setItem("kcx", data?.data?.refresh_token);
            originalConfig.headers[
              "Authorization"
            ] = `Bearer ${data.data.access_token}`;

            authorized.defaults.headers.Authorization = `Bearer ${data.data.access_token}`;
            return axiosPrivate(originalConfig);
          }
        } catch (error) {
          error.response.status === 400 && localStorage.removeItem("kcx");
        }
      }
    }
  );

  useEffect(() => {
    localStorage.getItem("kcx") || navigate("/");
    try {
      (async () => {
        try {
          authorized.defaults.headers.Authorization = `Bearer ${auth}`;
          // eslint-disable-next-line react-hooks/exhaustive-deps
          modules = await Info.get();

          // eslint-disable-next-line no-throw-literal
          if (!modules) throw { message: "Modules not found", status: "404" };
          modules && setLoading(false);
        } catch (e) {
          navigate("/");
        }
      })();
    } catch (error) {
      navigate("/");
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="md:flex w-full">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminMain;
