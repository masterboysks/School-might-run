import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#" },
  {
    name: "Admit card",
    href: "/admin/dashboard/exam/admit-card",
  },
];
export default function AdmitCard() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form></Form>
      <Table></Table>
    </>
  );
}
