import React from "react";
import Breadnav from "../../../components/admin/Breadnav";
import AddIcon from "@mui/icons-material/Add";
import CompanyApi from "../../../api/Company";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import CompanyCard from "../../../components/admin/company/CompanyCard";
import { useState, useEffect } from "react";
import Pagination from "../../../components/commom/Pagination";

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

const pages = [{ name: "Company", href: "#", current: true }];
export default function Company() {
  const [company, setCompany] = useState([]);
  const [pagination, setPagination] = useState({});

  const [suffix, setSuffix] = useState("spellinnovation.com.np");
  // const [plansWithId, setPlansWithId] = useState([]);
  const [page, setPage] = useState(1);
  // useEffect(() => {
  //   (async () => {
  //     const data = await Company.plans();
  //     if (!data.data.data.domain) return;
  //     setPlansWithId(data.data.data.planName);
  //     const temp = data.data.data.planName.map((c) => {
  //       return c.name;
  //     });
  //     setPlans(temp);

  //     setSuffix(data.data.data.domain);
  //   })();
  // }, []);
  useEffect(() => {
    (async () => {
      try {
        const data = await CompanyApi.get(page);
        const datas = data?.data?.data;
        setCompany(datas?.data);
        setPagination(datas?.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);
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
      <div className="main grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-6 gap-3">
        {company.map((c) => (
          <CompanyCard
            key={c.id}
            defaultValues={c}
            name={c.company_name}
            mail={c.email}
            link={c.link}
            domain={c.domain}
            username={c.username}
            logo={c.logo}
            plan={c.plan_name}
            modules={c.modules}
            max_users={c.max_users}
            users={c.total_users}
            company={company}
            setCompany={setCompany}
            suffix={suffix}

            // lastlogged={lastlogged}
            // expire={expire}
          />
        ))}
      </div>
      <div>
        <Pagination pagination={pagination} setPage={setPage} />
      </div>
    </>
  );
}
