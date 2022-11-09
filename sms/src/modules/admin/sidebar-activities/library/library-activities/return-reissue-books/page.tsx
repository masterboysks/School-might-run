import React from 'react';
import Break from '../../../../../../components/common/Break';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import { useForm } from 'react-hook-form';
import Form from './Form';
import Table from './Table';
const pages = [
  { name: 'Library' },
  {
    name: 'return  / Reissue books',
    href: '/admin/dashboard/library/library-activities/return-reissue-book',
  },
  {
    name: 'Lend',
    href: '#',
  },
];
export default function ReturnReIssueBooks() {
  const {
    register,
    handleSubmit,
    //  formState: { errors ,isValid },
  } = useForm();
  const onSubmit = (d) => console.log(d);
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Return/ Reissue books" />
      <Form
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      <Table />
    </>
  );
}
