import React, { useEffect, useState } from 'react';
import RenderTable from './EntryTableRender';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useFieldArray } from 'react-hook-form';
import { InputDisabled } from '../../../../../../components/common/fields';

export default function Table({
  type,
  control,
  register,
  setValue,
  watch,
  setGrandTotal,
  grandTotal,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const entry = watch('invoice_type');
  useEffect(() => {
    setGrandTotal(watch('items').reduce((t, c, i) => t + c.total_amount, 0));
  }, [watch()]);
  useEffect(() => {
    setValue('items', [
      { invoice_date: '', description: '', amount: 0, discount_amount: 0 },
    ]);
  }, [entry]);

  return (
    <div className={`${type ? '' : ' pointer-events-none opacity-50'}`}>
      <div
        className={` ring-1 ring-black ring-opacity-5 mb-3 mt-6 min-w-full overflow-x-auto rounded-lg shadow `}
      >
        <div className=" flex flex-col w-full rounded">
          <div className=" overflow-x-auto">
            <table className=" min-w-full divide-y divide-gray-300 table-fixed">
              <thead className="bg-gray-50">
                <tr className="text-primary-grey-700">
                  <th
                    scope="col"
                    className=" py-3.5 px-3 text-left text-sm font-semibold text-primary-active"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Amount (Rs.)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Discount (Rs.)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Total amount (Rs.)
                  </th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody className=" bg-white divide-y divide-gray-200">
                {fields.map((curr, index) => {
                  return (
                    <RenderTable
                      key={curr.id}
                      type={type}
                      index={index}
                      register={register}
                      setValue={setValue}
                      remove={remove}
                      watch={watch}
                      setGrandTotal={setGrandTotal}
                    />
                  );
                })}
                <tr className="bg-gray-50 ">
                  <td colSpan={6}>
                    <div
                      className={`w-fit flex p-2 mx-2 ml-auto cursor-pointer ${
                        type === 'discount'
                          ? 'pointer-events-none opacity-40 '
                          : ' '
                      }`}
                    >
                      <button
                        className="w-fit flex items-center justify-center"
                        onClick={(e) => {
                          e.preventDefault();
                          append({
                            invoice_date: '',
                            description: '',
                            ammount: 0,
                            discount_amount: 0,
                          });
                        }}
                      >
                        <div className="text-primary-btn mx-1">Add new</div>
                        <AddIcon
                          className="text-primary-btn"
                          fontSize="inherit"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="md:flex-row flex flex-col w-full">
        <div className="grid items-center grid-cols-2 py-1">
          <InputDisabled label="Grand total:" value={grandTotal || 0} />
          {/* <label htmlFor="grandTotal">Grand total :</label>
          <input
            type="number"
            name="grandTotal"
            disabled
            id="grandTotal"
            placeholder="Rs.12000"
            className="mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
          /> */}
        </div>
        <div className=" md:ml-3 md:my-0 md:mt-auto flex justify-end flex-1 my-3">
          <div className="btns w-fit ">
            <Link
              to="/admin/dashboard/fee/student-logsheet "
              className="secondary_btn"
            >
              Cancel
            </Link>
            <button type="submit" className="primary_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
