import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import Form from "./Form";
import Table from "./Table";
const pages = [
  { name: "Exam" },

  {
    name: "Marksledger",
    href: "/admin/dashboard/exam/marks-ledger",
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
