import React from "react";
import Breadnav from "../../../components/admin/Breadnav";
import MainLayout from "../../../layout/admin/MainLayout";
import AddIcon from "@mui/icons-material/Add";
const pages = [{ name: "Company", href: "#", current: true }];
export default function Company() {
  return (
    <MainLayout className="text-primary-grey">
      <Breadnav pages={pages} />
      <div className="flex justify-between mt-3">
        <h1 className="text-xl ">Manage Company</h1>
        <div className=" text-white icon w-fit bg-primary-base/80 rounded h-fit p-1">
          <AddIcon />
        </div>
      </div>
      <div className="main"></div>
    </MainLayout>
  );
}
