import { CurrencyDollarIcon, PrinterIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Break from '../../../../../../components/common/Break';
import Table from './Table';

export default function Form() {
  return (
    <>
      serch lefft
      <Break title="Total ammount" />
      <div className="md:flex justify-between ">
        <div className="flex my-3 gap-3">
          <div className="  ring-black w-fit ring-opacity-5 ring-1 form-solid p-4 rounded-md shadow py-3 flex px-4">
            <div className="">
              <span className="">Total Fine Recived</span>
              <div className="text-primary-grey-700 flex gap-2 ">
                <div className="text-sm mt-auto">Rs</div>
                <div className="text-2xl">1,280</div>
              </div>
            </div>
            <div className=" w-16 h-16">
              <CurrencyDollarIcon />
            </div>
          </div>

          <div className="  ring-black w-fit  ring-opacity-5 ring-1 form-solid p-4 rounded-md shadow py-3 flex px-4">
            <div className="">
              <span className="">Total Due Fine</span>
              <div className="text-primary-grey-700 flex gap-2 ">
                <div className="text-sm mt-auto">Rs</div>
                <div className="text-2xl">1,280</div>
              </div>
            </div>
            <div className=" w-16 h-16">
              <CurrencyDollarIcon />
            </div>
          </div>
        </div>
        <div className="flex mt-auto my-3">
          <div className="text-primary-btn font-semibold">Print</div>
          <div className=" text-primary-btn w-5 ml-1">
            <PrinterIcon />
          </div>
        </div>
      </div>
      <Table />
    </>
  );
}
