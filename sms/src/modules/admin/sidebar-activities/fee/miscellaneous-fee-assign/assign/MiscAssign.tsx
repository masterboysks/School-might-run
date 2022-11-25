import Break from '../../../../../../components/common/Break';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Form from './Form';
const pages = [
  { name: 'Fee' },
  {
    name: 'Miscellaneous fee assign',
    href: 'admin/dashboard/fee/miscellaneous-fee-assign',
  },
  {
    name: 'Assign',
    href: 'admin/dashboard/fee/miscellaneous-fee-assign/assign',
  },
];
export default function MiscAssign() {
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Assign misc. fee" />
      <Form />
    </>
  );
}
