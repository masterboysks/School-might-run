import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { InputNumber } from '.';
import dateFormatApi from '../../../api/common/dateFormatApi';
import './datepicker.css';
import { Select } from '.';
const arrayMonths = [
  {
    name: 'Baishakh',

    id: 1,
  },
  {
    name: 'Jestha',

    id: 2,
  },
  {
    name: 'Aashadha',

    id: 3,
  },
  {
    name: 'Shrawan',

    id: 4,
  },
  {
    name: 'Bhadra',

    id: 5,
  },
  {
    name: 'Ashwin ',

    id: 6,
  },
  {
    name: 'Kartik ',

    id: 7,
  },
  {
    name: 'Mangsir ',

    id: 8,
  },
  {
    name: 'Paush ',

    id: 9,
  },
  {
    name: 'Magh ',

    id: 10,
  },
  {
    name: 'Falgun ',

    id: 11,
  },
  {
    name: 'Chaitra ',

    id: 12,
  },
];
function ad_bs({ selected, setSelected, label, defaultDate = '' }) {
  // register,
  // name = 'date_format',
  const { data } = useQuery({
    queryFn: () => dateFormatApi.get(),
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: ['Dateformatofacompany/89217648'],
  });

  useEffect(() => {
    if (defaultDate) {
      setSelected(defaultDate);
    } else setSelected(new Date().toISOString().split('T')[0]);
  }, [defaultDate]);
  const [render, setRender] = useState(1);
  const handleDate = ({ bsDate }) => {
    setSelected(bsDate);
  };
  useEffect(() => {
    setRender((c) => c + 1);
  }, [defaultDate]);
  if (data?.data === '2')
    return (
      <>
        {label && (
          <>
            <label className="my-6  text-sm ">{label}</label>
            <br />
          </>
        )}
        {render && (
          <Calendar
            key={render}
            onChange={handleDate}
            defaultDate={defaultDate || 0}
            language="en"
            className={`mt-[6px] w-full fff  rounded focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm `}
          />
        )}
        {/* <input className="hidden" {...register(name, { value: data?.data })} /> */}
      </>
    );

  return (
    <>
      {label && (
        <>
          <label className="my-6 text-sm ">{label}</label>
          <br />
        </>
      )}
      <input
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm `}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        type="date"
      />
      {/* <input className="hidden" {...register(name, { value: data?.data })} /> */}
    </>
  );
}

export default ad_bs;
export const bs_ad_year = (props) => {
  return (
    <InputNumber
      placeholder="2005"
      {...props}
      name={`${props.name}`}
      min={2000}
      max={2199}
      step="1"
    />
  );
};
export const bs_ad_month = (props: {
  name: any;
  errors?: {} | undefined;
  register: any;
  label: any;
  disabled?: boolean | undefined;
  id?: string | undefined;
  required?: boolean | undefined;
  showError?: boolean | undefined;
  className?: string | undefined;
  labelClassName?: string | undefined;
}) => {
  return (
    <Select value={arrayMonths} {...props} name={`${props.name}[month]`} />
  );
};
