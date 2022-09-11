import Breadnav from "../../../../../../../components/common/Breadnav";
import Tables from "./Tables";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "University/Board",
    href: "/admin/dashboard/admin/data-setup/university-board",
    current: true,
  },
];
const UniversityBoard = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Tables />
    </>
  );
};

export default UniversityBoard;
