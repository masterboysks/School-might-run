import React from 'react';
import { InputNumber, Select } from '.';
const arrayMonths = [
  {
    bs: 'Baishakh',

    id: 1,
  },
  {
    bs: 'Jestha',

    id: 2,
  },
  {
    bs: 'Aashadha',

    id: 3,
  },
  {
    name: 'April',
    id: 4,
  },
  {
    name: 'May',
    id: 5,
  },
  {
    name: 'June',
    id: 6,
  },
  {
    name: 'July',
    id: 7,
  },
  {
    name: 'August',
    id: 8,
  },
  {
    name: 'September',
    id: 9,
  },
  {
    name: 'October',
    id: 10,
  },
  {
    name: 'November',
    id: 11,
  },
  {
    name: 'December',
    id: 12,
  },
];
// name: 'January',
// name: 'February',
// name: 'March',
// bs: 'Shrawan',
// bs: 'Bhadra',
// bs: 'Ashwin ',
// bs: 'Kartik ',
// bs: 'Mangsir ',
// bs: 'Paush ',
// bs: 'Magh ',
// bs: 'Falgun ',
// bs: 'Chaitra ',
export const bs_ad_month = (props) => {
  const format = localStorage.getItem('hdjkjkfg');
  return (
    <Select
      value={
        format === '8cef65fa-4dd7-11ed-bdc3-0242ac120002'
          ? arrayMonths.map((c) => {
              return { id: c.id, name: c.bs };
            })
          : arrayMonths
      }
      {...props}
      name={`${props.name}[month]`}
    />
  );
};

export const bs_ad_day = (props) => {
  return (
    <InputNumber
      placeholder="16"
      {...props}
      name={`${props.name}[day]`}
      min="1"
      max="32"
      step="1"
    />
  );
};
