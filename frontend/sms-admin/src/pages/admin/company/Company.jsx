import React from "react";
import Breadnav from "../../../components/admin/Breadnav";
import MainLayout from "../../../layout/admin/MainLayout";
import AddIcon from "@mui/icons-material/Add";
import Card from "../../../components/admin/company/Card";

import logo from "/logo.png";
import { Link } from "react-router-dom";

const pages = [{ name: "Company", href: "#", current: true }];
export default function Company() {
  return (
    <MainLayout className="text-primary-grey ">
      <Breadnav pages={pages} />
      <div className="flex justify-between mt-3">
        <h1 className="text-xl ">Manage Company</h1>
        <Link
          to="add"
          className=" text-white icon w-fit bg-primary-base/80 rounded h-fit p-1"
        >
          <AddIcon />
        </Link>
      </div>
      <div className="main grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 my-6">
        <div className="">
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
      </div>
    </MainLayout>
  );
}
