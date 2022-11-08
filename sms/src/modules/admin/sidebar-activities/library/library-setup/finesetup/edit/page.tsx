import React from 'react';
import Break from '../../../../../../../components/common/Break';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Form from './Form';

function LibraryFineSetup() {
  const pages = [
    { name: 'Library' },
    {
      name: 'Setup',
      href: '/admin/dashboard/library/library-member/staff',
    },
    {
      name: 'Fine setup',
      href: '/admin/dashboard/library/library-setup/fine-setup',
    },

    {
      name: 'Edit',
      href: '/admin/dashboard/library/library-setup/fine-setup/:id',
    },
  ];
  return (
    <div>
      <Breadnav pages={pages} />
      <Break title="Edit fine setup" />
      <Form />
    </div>
  );
}

export default LibraryFineSetup;
