import React from "react";
import Breadnav from "../../../components/admin/Breadnav";
import AddIcon from "@mui/icons-material/Add";

import logo from "/logo.png";
import { Link } from "react-router-dom";
import CompanyCard from "../../../components/admin/company/CompanyCard";
const company = [
  // {
  //   name: "AVM school",
  //   logo: logo,
  //   mail: "avm@avm.com.ed",
  //   lastlogged: "2001 Aug 12 15:13",
  //   plan: "Extra premium",
  //   expire: "2101 Aug 11 00:00",
  //   link: "avm.com.np",
  //   users: "999",
  //   modules: ["hjgdf", "hdkg"],
  // },
  //   {
  //     "id": "9fe398a5-575f-4678-a637-3144485f777a",
  //     "company_name": null,
  //     "email": "companyone@example.com",
  //     "domain": "companyone.192.168.1.131",
  //     "company": null,
  //     "logo": "http://192.168.1.131/uploads/tenant/logos/1662096727.jpg",
  //     "created_at": "September 2nd 2022",
  //     "plan_name": null,
  //     "modules": null,
  //     "total_users": 1
  // }
  {
    name: "AVM school",
    logo: logo,
    mail: "avm@avm.com.ed",
    lastlogged: "2001 Aug 12 15:13",
    plan: "Extra premium",
    expire: "2101 Aug 11 00:00",
    link: "avm.com.np",
    users: "999",
    modules: ["hjgdf", "hdkg"],
  },
  {
    name: "AVM school",
    logo: logo,
    mail: "avm@avm.com.ed",
    lastlogged: "2001 Aug 12 15:13",
    plan: "Extra premium",
    expire: "2101 Aug 11 00:00",
    link: "avm.com.np",
    users: "999",
    modules: ["hjgdf", "hdkg"],
  },
  {
    name: "AVM school",
    logo: logo,
    mail: "avm@avm.com.ed",
    lastlogged: "2001 Aug 12 15:13",
    plan: "Extra premium",
    expire: "2101 Aug 11 00:00",
    link: "avm.com.np",
    users: "999",
    modules: ["hjgdf", "hdkg"],
  },
  {
    name: "AVM school",
    logo: logo,
    mail: "avm@avm.com.ed",
    lastlogged: "2001 Aug 12 15:13",
    plan: "Extra premium",
    expire: "2101 Aug 11 00:00",
    link: "avm.com.np",
    users: "999",
    modules: ["hjgdf", "hdkg"],
  },
];

const pages = [{ name: "Company", href: "#", current: true }];
export default function Company() {
  return (
    <>
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
      <div className="main grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 my-6 gap-3">
        {company.map(
          ({
            logo,
            name,
            mail,
            lastlogged,
            plan,
            expire,
            link,
            users,
            modules,
          }) => (
            <CompanyCard
              key={mail}
              logo={logo}
              name={name}
              mail={mail}
              lastlogged={lastlogged}
              plan={plan}
              expire={expire}
              link={link}
              users={users}
              modules={modules}
            />
          )
        )}
      </div>
    </>
  );
}
