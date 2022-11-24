import React, { useContext, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import studentApi from '../../../../../../../api/admin/dashboard/student/studentApi';
import { useNavigate } from 'react-router-dom';
import StudentFormStudentPictureAndGurdainPicture from '../../../../../../../contex/admin/student/StudentFormStudentPictureAndGurdainPicture';
import {
  InputDisabled,
  InputNumber,
} from '../../../../../../../components/common/fields';
import { useForm } from 'react-hook-form';

export default function FeeForm() {
  const navigator = useNavigate();
  const formState = useContext(StudentFormStudentPictureAndGurdainPicture);
  const [errors, setErrors] = useState([]);
  const {
    register,

    handleSubmit,
    reset,
    getValues,
    watch,
  } = useForm({ defaultValues: formState.values?.fee?.fee_details });
  const temp = {
    level_id: formState?.values?.class?.level_id,
    batch_id: formState.values?.personal?.batch_id,
    class_id: formState.values?.class?.class_semester_id,
    faculty_id: formState.values?.class?.faculty_id,
    sub_faculty_id: formState.values?.class?.subfaculty_id,
  };

  const { data: feeDetails } = useQuery({
    queryFn: () => studentApi.getFeeDetails(temp),
    queryKey: ['studentapigetfeedetails'], //hurts a little to user for better performance
    select: (d) => d?.data?.data?.filter((c) => c.is_selected),
    // onSuccess: (d) => console.log(d),
  });
  const mutation = useMutation({
    mutationFn: (d: any) => studentApi.create(d),
    onSuccess: () => {
      formState.setValues({});
      navigator('/admin/dashboard/student/student-information/');
    },
    onError: (e) => setErrors(e?.response?.data?.errors),
  });
  const onSubmit = (d) => {
    const form = new FormData();

    for (const name in formState.values.personal) {
      form.append(`personal[${name}]`, formState.values.personal[name]);
    }
    form.append(
      'personal[profile_picture]',
      formState.values.personal.profile_picture[0]
    );
    form.append(
      'personal[birth_cit_certificate]',
      formState.values.personal.birth_cit_certificate[0]
    );
    for (const name in formState.values.local_guardian) {
      form.append(
        `local_guardian[${name}]`,
        formState.values.local_guardian[name]
      );
    }
    form.append(
      'local_guardian[profile_picture]',
      formState.values.local_guardian.profile_picture[0]
    );
    for (const name in formState.values.father) {
      form.append(`father[${name}]`, formState.values.father[name]);
    }
    for (const name in formState.values.mother) {
      form.append(`mother[${name}]`, formState.values.mother[name]);
    }
    for (const name in formState.values.address) {
      form.append(`address[${name}]`, formState.values.address[name]);
    }
    for (const name in formState.values.class) {
      form.append(`class[${name}]`, formState.values.class[name]);
    }
    // for (const name in formState.values.fee.fee_details) {
    //   form.append(`fee.fee_details[${name}]`, formState.values.fee[name]);
    // }
    for (const name in d) {
      console.log(d[name]);
      form.append(`fee[fee_details][${name}][discount]`, d[name].discount);
    }
    // for (const name in personal) {
    //   form.append(`personal[${name}]`, personal[name]);
    // }
    // for (const name in d) {
    //   form.append(`general[${name}]`, d[name]);
    // }
    // form.delete('personal[photo]');
    // form.append('personal[profile_picture]', photo?.photo && photo?.photo[0]);
    // form.append('general.joined_date', date);

    // staffAPI.create(form).then((data) => {
    //   // console.log(data);
    //   data?.response?.status === 422 &&
    //     setMessage(data?.response?.data?.errors);
    //   if (data?.status === 201) {
    //     navigate('/admin/dashboard/staff/staff-information/');
    //   }
    // });
    // console.log({ ...formState.values, fee: { fee_details: { ...d } } });
    // mutation.mutate({ ...formState.values, fee: { fee_details: { ...d } } });
    mutation.mutate(form);
  };
  const onBack = () => {
    formState.setValues((c) => {
      return { ...c, fee: { fee_details: { ...getValues() } } };
    });
    navigator('/admin/dashboard/student/student-information/add-class-details');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.length !== 0 && (
        <>
          <div className="!text-red-600 font-medium text-lg my-3">
            <ul>
              {errors?.map((curr) => (
                <li key={curr}>{curr}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div className=" ring-1 ring-black ring-opacity-5 my-9 min-w-full overflow-x-auto rounded-lg shadow">
        <div className=" flex flex-col w-full rounded">
          <div className=" overflow-x-auto">
            <table className=" min-w-full divide-y divide-gray-300 table-fixed">
              <thead className="bg-gray-50">
                <tr className="text-primary-grey-700">
                  <th
                    scope="col"
                    className=" py-3.5 px-3 text-left text-sm font-semibold text-primary-active"
                  >
                    Fee name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Amount (Rs)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Discount amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Total amount (Rs)
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white divide-y divide-gray-200">
                {feeDetails?.map((c) => (
                  <tr key={c.name}>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-left text-gray-500">
                      {/* <Checkbox
                        register={register}
                        label={c.name}
                        name={`${c.id}.checkbox`}
                      /> */}
                      {c.name}
                      {/* <input
                        type="checkbox"
                        className=" mx-2 rounded"
                        id="admission_fee"
                      />
                      <label htmlFor="admission_fee"></label> */}
                    </td>
                    <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                      <InputDisabled value={c.amount} label={undefined} />
                      {/* <input
                        type="Number"
                        placeholder="5000"
                        className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      /> */}
                    </td>
                    <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                      <InputNumber
                        register={register}
                        label={undefined}
                        name={`${c.id}.discount`}
                      />

                      {/* <input
                        type="Number"
                        placeholder="1000"
                        className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      /> */}
                    </td>
                    <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                      <InputDisabled
                        label={undefined}
                        key={watch(`${c.id}.discount`)}
                        value={`${
                          parseInt(c.amount) - (watch(`${c.id}.discount`) || 0)
                        }`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" w-full my-6">
        <div className="w-fit flex items-center ml-auto">
          <div className="">Grand total :</div>
          <div className=" border-primary-grey-400 bg-primary-grey-100 text-primary-grey-700 py-2 px-3 pr-5 ml-2 text-sm border-[1px] rounded shadow-md">
            Rs.{' '}
            {feeDetails?.reduce((t, c) => c.amount + t, 0) -
              feeDetails?.reduce(
                (t, c) => watch(`${c.id}.discount`) + t || 0,
                0
              )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <button className="secondary_btn" onClick={onBack}>
            Back
          </button>
          <button
            type="submit"
            className="primary_btn"
            // disabled={!isValid}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
{
  /* <tr>
<td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
<input
  type="checkbox"
  className=" mx-2 rounded"
  id="transportation_fee"
  // value={transportation}
  value={transportation}
  onChange={() => {
    setTransportation(!transportation);
  }}
/>
<label htmlFor="transportation_fee">
  Transportation fee
</label>
<br />
{transportation && (
  <div className="flex flex-col ml-8">
    <select
      name="vehicle_route"
      id="vehicle_route"
      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
    >
      <option value="test">Select</option>
    </select>
    <select
      name="vehicle_route"
      id="vehicle_route"
      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
    >
      <option value="test">Select</option>
    </select>
    <select
      name="vehicle_route"
      id="vehicle_route"
      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
    >
      <option value="test">Select</option>
    </select>
  </div>
)}
</td>
<td className="whitespace-nowrap relative h-[75px] py-4 pr-3 text-sm text-left text-gray-500">
<input
  className=" p- rounded  focus:ring-primary-btn   absolute top-[22px] xl:w-[96%] w-[90%] sm:w-[92%] md:w-[94%] border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
  disabled
  type="number"
  placeholder="8000"
/>
</td>
<td className="whitespace-nowrap relative h-[75px] py-4 pr-3 text-sm text-left text-gray-500 ">
<input
  type="Number"
  placeholder="1000"
  className="  p- rounded  focus:ring-primary-btn    absolute top-[22px] xl:w-[96%] w-[90%] sm:w-[92%] md:w-[94%]  border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
/>
</td>
<td className="whitespace-nowrap relative h-[75px] py-4 pr-3 text-sm text-left text-gray-500">
<input
  className=" p- rounded  focus:ring-primary-btn    absolute top-[22px] xl:w-[96%] w-[90%] sm:w-[92%] md:w-[94%]  border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
  disabled
  type="number"
  placeholder="7000"
/>
</td>
</tr> */
}

{
  /* 
               
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
                      placeholder="5000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="Number"
                      placeholder="1000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="4000"
                    />
                  </td>
                </tr>
                
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
                      placeholder="10000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="Number"
                      placeholder="1000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="9000"
                    />
                  </td>
                </tr>
                
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
                      placeholder="2000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="Number"
                      placeholder="0"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="2000"
                    />
                  </td>
                </tr>
                
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
                      placeholder="1000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="Number"
                      placeholder="0"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="1000"
                    />
                  </td>
                </tr> */
}
{
  /* transportation */
}
