import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { InputNumber } from '.';
import dateFormatApi from '../../../api/common/dateFormatApi';
import './datepicker.css';

function ad_bs({ selected, setSelected, label, defaultDate = '', register }) {
  const { data } = useQuery({
    queryFn: () => dateFormatApi.get(),
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: ['Dateformatofacompany/89217648'],
  });
  const _ = register('date_format', { value: data?.data });

  useEffect(() => {
    if (defaultDate) {
      setSelected(defaultDate);
    } else setSelected(new Date().toISOString().split('T')[0]);
  }, [defaultDate]);
  const [render, setRender] = useState(1);
  const handleDate = ({ bsDate }) => {
    setSelected({ date: bsDate });
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
