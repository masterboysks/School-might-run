import React from "react";
import Breadnav from "../../../components/admin/Breadnav";
import MainLayout from "../../../layout/admin/MainLayout";
import AddIcon from "@mui/icons-material/Add";
import Card from "../../../components/admin/company/Card";

import logo from "/logo.png";

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
      <div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          logo={logo}
          name="AVM school"
          mail="avm@avm.com.ed"
          lastlogged="2001 Aug 12 15:13"
          plan="Extra premium"
          expire="2101 Aug 11 00:00"
          link="avm.com.np"
          users="999"
          modules={["hjgdf", "jhfda"]}
        />
      </div>
    </MainLayout>
  );
}
