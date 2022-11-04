import Breadnav from "../../../../../../../components/common/Breadnav";
import Table from "./Table";

const pages = [
  { name: "Admin" },
  {
    name: "Date setup",
  },
  {
    name: "Level",
    href: "/admin/dashboard/admin/data-setup/level",
  },
];
const Level = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <Table />
    </>
  );
};

export default Level;
