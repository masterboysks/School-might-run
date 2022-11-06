import React from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Calendar from './Calendar';
const pages = [
  { name: 'Admin' },
  {
    name: 'Event',
    href: '/admin/dashboard/admin/event-calender',
  },
];
function Event() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Calendar />
    </div>
  );
}

export default Event;
