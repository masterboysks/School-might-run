import { useParams } from 'react-router-dom';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';

import Form from './Form';
import Table from './Table';

export default function AssignAssignExam() {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: 'Exam' },
    {
      name: 'Exam setup',
    },
    {
      name: 'Exam name',
      href: '/admin/dashboard/exam/exam-setup/assign-mark',
    },
    {
      name: `${classOfSchool}-${section}`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Assign marks" />
      <Form />
      <Table />
    </>
  );
}
