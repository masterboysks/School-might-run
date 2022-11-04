import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Fee" },
  {
    name: "Student logsheet",
    href: "/fee/student-logsheet",
  },
];
export default function StudentLogsheet() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
