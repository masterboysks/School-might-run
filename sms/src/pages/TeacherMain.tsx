import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { authorized, axiosPrivate } from '../api/common/axios';
import AuthContext from '../contex/AuthProvider';
import { useContext } from 'react';
import Info from '../api/admin/Info';
import Auth from '../api/common/Auth';
import { useState } from 'react';
import Sidebar from '../modules/teacher/sidebar/Sidebar';
import Navbar from '../modules/teacher/navbar/Navbar';
import React from 'react';

const TeacherMain = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [sidebarData, setSidebarData] = useState([]);
  let modules;
  // authorized.interceptors.response.use(
  //   (config) => {
  //     return  config;
  //   },
  //   async (err) => {
  //     const originalConfig = err?.config;

  //     if (err?.response?.status === 401 && localStorage.getItem("kcx")) {
  //       try {
  //         const { data } = await Auth.refresh(localStorage.getItem("kcx"));
  //         if (data.data.refresh_token && data.data.access_token) {
  //           setAuth(data.data.access_token);
  //           localStorage.setItem("kcx", data?.data?.refresh_token);
  //           originalConfig.headers[
  //             "Authorization"
  //           ] = `Bearer ${data.data.access_token}`;

  //           authorized.defaults.headers.Authorization = `Bearer ${data.data.access_token}`;
  //           return  axiosPrivate(originalConfig);
  //         }
  //       } catch (error) {
  //         error.response.status === 400 && localStorage.removeItem("kcx");
  //       }
  //     }
  //   }
  // );

  // useEffect(() => {
  //   localStorage.getItem("kcx") || navigate("/");
  //   try {
  //     (async () => {
  //       try {
  //         authorized.defaults.headers.Authorization = `Bearer ${auth}`;
  //         modules = await Info.get();
  //         // console.log(modules);
  //         setSidebarData(modules.data?.data?.modules);
  //         if (!modules) throw { message: "Modules not found", status: "404" };
  //         modules && setLoading(false);
  //       } catch (e) {
  //         // // console.log(e);
  //         navigate("/");
  //       }
  //     })();
  //   } catch (error) {
  //     // // console.log(error);
  //     navigate("/");
  //   }
  // }, []);
  // if (loading) {
  //   return  <div>Loading...</div>;
  // }
  return (
    <>
      <Navbar />
      <div className="md:flex w-full text-primary-grey-600">
        <Sidebar modules={sidebarData} />
        <Outlet />
      </div>
    </>
  );
};

export default TeacherMain;
