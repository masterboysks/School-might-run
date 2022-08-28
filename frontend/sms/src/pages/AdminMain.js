import Navbar from "../admin/navbar/Navbar";
import Sidebar from "../admin/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AdminMain = () => {
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
