import Navbar from "../modules/admin/navbar/Navbar";
import Sidebar from "../modules/admin/sidebar/Sidebar";
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
