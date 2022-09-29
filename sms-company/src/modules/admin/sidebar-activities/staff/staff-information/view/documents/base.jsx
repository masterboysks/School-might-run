import { Outlet } from "react-router-dom";
import Breadnav from "../../../../../../../components/common/Breadnav";
import Tabs from "../../Tabs";
const tabs = [
  {
    name: "General details",
    href: "/admin/dashboard/staff/staff-information/44/general",
    current: false,
  },
  {
    name: "Academic details",
    href: "/admin/dashboard/staff/staff-information/44/academic",
    current: false,
  },
  {
    name: "Documents",
    href: "",
    current: true,
  },
];
const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff Information",
    href: "",
    current: false,
  },
  {
    name: "Add",
    href: "#",
    current: true,
  },
];
const DocumentView = () => {
  return (
    <>
      {/* <Breadnav pages={pages} /> */}
      <Tabs tabs={tabs} />
      <Outlet></Outlet>
    </>
  );
};
export default DocumentView;
