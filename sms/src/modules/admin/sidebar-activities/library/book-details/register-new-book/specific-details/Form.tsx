import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Break from '../../../../../../components/common/Break';
import { Input } from '../../../../../../components/common/fields';
import Table from './Table';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../../../../components/common/Buttons';
import RenderTable from './RenderTable';

export default function Form() {
  const [station, setStation] = useState<number[]>([0]);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm({
    mode: 'onBlur',
  });
  const onBack = async () => {
    const temp = getValues();
    // console.log(temp);
  };
  return (
    <form>
      <div className="">
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
                      Book item(unit no.)
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Accession number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Shelf number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Sub-shelf number
                    </th>

                    <th className=""></th>
                  </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200">
                  {station?.map((curr, index) => {
                    return (
                      <RenderTable
                        key={index}
                        errors={errors}
                        register={register}
                        setStation={setStation}
                        station={station}
                        current={curr}
                        index={index}
                      />
                    );
                  })}
                  <tr className="bg-gray-50 ">
                    <td colSpan={5}>
                      <div
                        className={`w-fit flex p-2 mx-2 ml-auto cursor-pointer
                    }`}
                      >
                        <div
                          className="w-fit flex items-center justify-center"
                          onClick={() => {
                            setStation((curr) => {
                              return [...curr, curr.splice(-1)[0] + 1];
                            });
                          }}
                        >
                          <div className="text-primary-btn mx-1">Add new</div>
                          <AddIcon
                            className="text-primary-btn"
                            fontSize="inherit"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-fit ml-auto">
          <SecondaryButton onClick={() => onBack()}>Cancel</SecondaryButton>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </div>
      </div>
    </form>
  );
}
