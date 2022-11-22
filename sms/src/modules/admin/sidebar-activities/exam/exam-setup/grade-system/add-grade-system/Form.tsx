import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RenderTable from './RenderTable';
import { Select } from '../../../../../../../components/common/fields';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../../../../components/common/Buttons';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import levelApi from '../../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import { useFieldArray, useForm } from 'react-hook-form';

export default function Form() {
  const { data: arrayLevel, isLoading } = useQuery({
    queryKey: ['levelapigetall'],
    queryFn: () => levelApi.getAll(),
    select: (d) => d.data.data,
    onSuccess: (d) => console.log(d),
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      grade_system: [
        { lower_limit: null, upper_limit: null, grade: '', gpa: null },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'grade_system',
  });
  const onSubmit = (d) => console.log(d);
  // const arrayLevel = ['kdsjhf', 'dsjjkhujhg'];
  // const [level, setLevel] = useState('Select');
  // const [errorLevel, setErrorLevel] = useState(false);
  // const [inputFileds, setInputFileds] = useState([
  //   { lowerLimit: '', upperLimit: '', grade: '', gpa: '' },
  // ]);
  // const navigate = useNavigate();
  // const handleSubmit = () => {
  //   // console.log({ inputFileds, level });
  //   let temp = false;
  //   level === 'Select' && (temp = true) && setErrorLevel(true);
  //   inputFileds.map((curr) => {
  //     (curr.lowerLimit && curr.upperLimit && curr.grade && curr.gpa) ||
  //       (temp = true);
  //   });
  //   temp || navigate('/admin/dashboard/exam/exam-setup/grading-system');
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="Level*"
              value={arrayLevel}
              register={register}
              name="level_id"
              required
              errors={errors}
            />
          </div>
        </div>
      </div>
      <div className="mt-11 lg:w-2/3 w-full">
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
                      Lower Limit(%)*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Upper Limit(%)*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Grade*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      GPA*
                    </th>

                    <th className=""></th>
                  </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200">
                  {fields.map((field, index, table) => {
                    return (
                      <RenderTable
                        errors={errors}
                        index={index}
                        key={field.id}
                        register={register}
                        remove={remove}
                        table={table}
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
                            append({
                              lower_limit: null,
                              upper_limit: null,
                              grade: '',
                              gpa: null,
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
          {/* <Link to="/admin/dashboard/exam/exam-setup/grading-system"> */}
          <SecondaryButton>Cancel</SecondaryButton>
          {/* </Link> */}
          <PrimaryButton type="submit">Save</PrimaryButton>
        </div>
      </div>
    </form>
  );
}
