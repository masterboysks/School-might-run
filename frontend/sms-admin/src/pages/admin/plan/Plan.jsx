import React, { useEffect, useState } from "react";
import BreadNav from "../../../components/admin/Breadnav";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PlanCard from "../../../components/admin/plan/PlanCard";
import Plans from "../../../api/Plans";
import Pagination from "../../../components/commom/Pagination";

const pages = [{ name: "Plan", href: "#", current: true }];
export default function Plan() {
  // const auth = useContext(AuthContext);
  const [plans, setPlans] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async () => {
      try {
        const data = await Plans.get(page);
        const datas = data?.data?.data;

        setPlans(datas?.data);
        setPagination(datas?.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);
  // useEffect(() => {
  //   console.log(auth);
  //   authorized.defaults.headers.Authorization = `Bearer ${auth}`;
  // });
  const Delete = (id) => {
    const temp = plans.filter((c) => c.id !== id);
    setPlans(temp);
    Plans.delete(id);
  };

  return (
    <>
      <BreadNav pages={pages} />
      <div className="flex justify-between mt-3">
        <h1 className="text-lg">Manage Plan</h1>
        <Link
          to="add"
          className=" text-white icon w-fit bg-primary-base/80 rounded h-fit p-1"
        >
          <AddIcon />
        </Link>
      </div>
      <div className="main grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 my-6 gap-3 ">
        {plans?.map((c) => (
          <PlanCard
            defaultValues={c}
            key={c.id}
            max_user={c.max_users}
            status={c.status}
            name={c.name}
            price={c.price}
            duration={c.duration}
            modules={c.modules}
            del={Delete}
          />
        ))}
      </div>
      <div>
        <Pagination pagination={pagination} setPage={setPage} />
      </div>
    </>
  );
}
