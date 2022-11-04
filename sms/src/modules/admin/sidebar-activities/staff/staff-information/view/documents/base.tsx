import { Outlet, useParams } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Tabs from "../../Tabs";

const pages = [
  { name: "Staff" },
  {
    name: "Staff Information",
    href: "",
  },
  {
    name: "Add",
  },
];
const DocumentView = () => {
  const { id } = useParams();
  const tabs = [
    {
      name: "General details",
      href: `/admin/dashboard/staff/staff-information/${id}/general`,
      current: false,
    },
    {
      name: "Academic details",
      href: `/admin/dashboard/staff/staff-information/${id}/academic`,
      current: false,
    },
    {
      name: "Documents",
      href: "",
      current: true,
    },
  ];
  return (
    <>
      {/* <Breadnav pages={pages} /> */}
      <Tabs tabs={tabs} />
      <Outlet></Outlet>
    </>
  );
};
export default DocumentView;
