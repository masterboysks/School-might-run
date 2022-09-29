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
    href: "",
    current: true,
  },
  {
    name: "Documents",
    href: "/admin/dashboard/staff/staff-information/44/document",
    current: false,
  },
];

const AcademicsView = () => {
  return (
    <>
      {/* <Breadnav pages={pages} /> */}
      <Tabs tabs={tabs} />
      <Outlet></Outlet>
    </>
  );
};
export default AcademicsView;
