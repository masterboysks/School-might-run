import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
  { name: "Fee" },
  {
    name: "Miscellaneous fee assign",
    href: "/fee/miscellaneous-fee-assign",
  },
  {
    name: "Assign",
    href: "/fee/miscellaneous-fee-assign/assign",
  },
];
export default function MiscAssign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Assign misc. fee"></Break>
      <Form />
    </>
  );
}
