import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Break from '../../break';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useQuery, useMutation } from '@tanstack/react-query';
import levelApi from '../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import classApi from '../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import batchApi from '../../../../../../api/admin/dashboard/admin/data-setup/batchApi';
import facultyApi from '../../../../../../api/admin/dashboard/admin/data-setup/facultyApi';
import subFacultyApi from '../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi';
import sectionsApi from '../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi';
import { Select } from '../../../../../../components/common/fields';
import feeAssignApi from '../../../../../../api/admin/dashboard/fee/feeAssignApi';
const schema = yup.object().shape({
  batch_id: yup.string().required(''),
  level_id: yup.string().required(''),
  class_id: yup.string().required(''),
  faculty_id: yup.string(),
  sub_faculty_id: yup.string(),
  // fee_rate_info: yup.string().required(''),
});
export default function Form() {
  // usestatehooks
  const [searchValid, setSearchValid] = useState(false);

  // use form hook
  const {
    control,
    register,
    getValues,
    watch,
    setError,
    resetField,
    handleSubmit,
    trigger,
    formState: { isValid, errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  // const {} = useFieldArray({
  //   control,
  //   name: 'fee_rate_info',
  // });
  const [valueLevel, valueClass, valueFaculty, valueSubFaculty, valueBatch] =
    watch(['level_id', 'class_id', 'faculty_id', 'sub_faculty_id', 'batch_id']);
  // usequery hooks
  const { data: arrBatch } = useQuery({
    queryKey: ['batchapigetall'],
    staleTime: Infinity,
    queryFn: () => batchApi.getAll(),
    select: (d) => d?.data.data,
  });

  const { data: arrLevel } = useQuery({
    queryKey: ['levelapigetall'],
    staleTime: Infinity,
    queryFn: () => levelApi.getAll(),
    select: (d) => d?.data.data,
  });
  const { data: arrClass } = useQuery({
    queryFn: () => classApi.getAll(valueLevel),
    queryKey: ['classapigetall', valueLevel],
    staleTime: Infinity,
    enabled: !!valueLevel,
    select: (d) => d?.data.data,
  });
  const { data: arrFaculty } = useQuery({
    queryKey: ['facultyapigetall', valueLevel],
    staleTime: Infinity,
    enabled: !!valueLevel,
    select: (d) => d?.data.data,
    queryFn: () => facultyApi.getAll(valueLevel),
  });
  const { data: arrSubFaculty } = useQuery({
    queryKey: ['subfacultyapigetall', valueFaculty],
    staleTime: Infinity,
    queryFn: () => subFacultyApi.getAll(valueFaculty),
    select: (d) => d?.data.data,
    enabled: !!valueFaculty,
  });
  const { data: feeRateTable } = useQuery({
    queryKey: ['', getValues()],
    queryFn: () => feeAssignApi.getFeeRate(getValues()),
    select: (d) => d?.data.data,
    onSuccess: (d) => console.log(d),
    staleTime: 20000,
    enabled: searchValid,
  });
  // const { data: section } = useQuery({
  //   queryKey: ['sectionsapigetbyclassid', valueClass],
  //   staleTime: Infinity,
  //   queryFn: () => sectionsApi.getByClassId(valueClass),
  //   select: (d) => d?.data.data,
  //   enabled: !!valueClass,
  // });
  useEffect(() => {
    resetField('class_id');
    resetField('faculty_id');
    setSearchValid(false);
  }, [valueLevel]);
  useEffect(() => {
    resetField('sub_faculty_id');
    setSearchValid(false);
  }, [valueFaculty]);
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(errors);
    if (await trigger()) {
      if (!(arrFaculty.length == 0)) {
        console.log('has faculty');
        if (valueFaculty) {
          if (!(arrSubFaculty == 0)) {
            if (valueSubFaculty) {
              setSearchValid(true);
            } else {
              setError('sub_faculty_id', { type: 'required', message: '' });
            }
          }
        } else {
          setError('faculty_id', { type: 'required', message: '' });
        }
      }
    }
    console.log(getValues());
  };
  const onSubmit = async (d) => console.log(d);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              errors={errors}
              label="Batch*"
              name="batch_id"
              register={register}
              value={arrBatch}
              disabled={!arrBatch}
            />
          </div>
          <div>
            <Select
              errors={errors}
              label="Level*"
              name="level_id"
              register={register}
              value={arrLevel}
              disabled={!arrLevel}
            />
          </div>
          <div className="">
            <Select
              errors={errors}
              label="Class/Semester*"
              name="class_id"
              register={register}
              value={arrClass}
              disabled={!arrClass}
            />
          </div>

          <div>
            <Select
              errors={errors}
              label="Faculty"
              name="faculty_id"
              register={register}
              value={arrFaculty}
              disabled={!arrFaculty}
            />
          </div>
          <div>
            <Select
              errors={errors}
              label="Sub-faculty"
              name="sub_faculty_id"
              register={register}
              disabled={!arrSubFaculty}
              value={arrSubFaculty}
            />
          </div>
          <div className="">
            <button onClick={handleSearch} className="primary_btn">
              Search
            </button>
          </div>
        </div>
      </div>
      {feeRateTable ? (
        <>
          <Break title="Fee rate info" />
          <div className="my-6">
            <div className="mt-11 lg:w-2/3 w-full">
              <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
                <div className="inline-block w-full align-middle">
                  <div className=" w-full rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300 table-fixed">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                          >
                            Fee name
                          </th>

                          <th
                            scope="col"
                            className="px-3 py-3.5 w-56 text-left text-sm font-medium text-primary-grey-700  "
                          >
                            Ammount
                          </th>
                        </tr>
                      </thead>
                      <tbody className=" bg-white divide-y divide-gray-200">
                        {/* addmission */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="checkbox"
                              className=" mx-2 rounded"
                              id="admission_fee"
                            />
                            <label htmlFor="admission_fee">Admission fee</label>
                          </td>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="Number"
                              placeholder=""
                              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                            />
                          </td>
                        </tr>
                        {/* Annual */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="checkbox"
                              className=" mx-2 rounded"
                              id="annual_fee"
                            />
                            <label htmlFor="annual_fee">Annual fee</label>
                          </td>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="Number"
                              placeholder=""
                              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                            />
                          </td>
                        </tr>
                        {/* monthly */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="checkbox"
                              className=" mx-2 rounded"
                              id="monthly_fee"
                            />
                            <label htmlFor="monthly_fee">Monthly fee</label>
                          </td>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="Number"
                              placeholder=""
                              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                            />
                          </td>
                        </tr>
                        {/* lab */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="checkbox"
                              className=" mx-2 rounded"
                              id="lab_fee"
                            />
                            <label htmlFor="lab_fee">Lab fee</label>
                          </td>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="Number"
                              placeholder=""
                              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                            />
                          </td>
                        </tr>
                        {/* pratical */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="checkbox"
                              className=" mx-2 rounded"
                              id="lab_fee"
                            />
                            <label htmlFor="lab_fee">Pratical fee</label>
                          </td>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                            <input
                              type="Number"
                              placeholder=""
                              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className=" w-full">
        <div className=" w-fit ml-auto">
          <Link to="/admin/dashboard/fee/fee-assign" className="secondary_btn">
            Cancel
          </Link>
          <Link to="/admin/dashboard/fee/fee-assign" className="primary_btn">
            Save
          </Link>
        </div>
      </div>
    </form>
  );
}
