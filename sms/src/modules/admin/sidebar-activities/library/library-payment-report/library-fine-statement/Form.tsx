import { CurrencyDollarIcon, PrinterIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Break from '../../../../../../components/common/Break';
import Table from './Table';

export default function Form() {
  return (
    <>
      serch lefft
      <div className="flex w-full justify-end my-3">
        <div className="text-primary-btn font-semibold">Print</div>
        <div className=" text-primary-btn w-5 ml-1">
          <PrinterIcon />
        </div>
      </div>
      <Table />
    </>
  );
}
