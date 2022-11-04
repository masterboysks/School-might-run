import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../break";
import Form from "./Form";
const pages = [
  { name: "Fee" },
  {
    name: "Fee type",
    href: "/fee/fee-type/",
  },
  {
    name: "Add",
    href: "/fee/fee-type/add",
  },
];
export default function AddFeeType() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add fee" />
      <Form />
    </>
  );
}
