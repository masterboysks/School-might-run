import Breadnav from "../../../../../../components/common/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Exam", href: "#", current: false },

  {
    name: "Marksledger",
    href: "/admin/dashboard/exam/marks-ledger",
    current: true,
  },
];
export default function MarkLedger() {
  return (
    <>
      <Breadnav pages={pages} />
      <Form />
      <Table />
    </>
  );
}
