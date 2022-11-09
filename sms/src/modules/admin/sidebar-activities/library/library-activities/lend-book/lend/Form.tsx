import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Profile from '/Profile.webp';
import {
  Input,
  InputDisabled,
} from '../../../../../../../components/common/fields';
import * as yup from 'yup';
import Break from '../../../../../../../components/common/Break';
import RenderTable from './RenderTable';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../../../../components/common/Buttons';
const schema = yup.object().shape({
  membership_no: yup.string().required('Please enter a valid Membership No*'),
});
export default function Form() {
  const [selectBook, setSelectBook] = useState<number[]>([0]);
  const [memberName, setMemberName] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm();
  const onSubmit = async (d) => console.log(d);
  const onBack = () => console.log('back button');
  return (
    <div className="mt-6 w-full xl:w-2/3">
      {/* diaglog left */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:grid-cols-2  lg:grid-cols-3  grid grid-cols-1 gap-4">
          <div className="">
            <Input
              label="Membership No*"
              register={register}
              name="membership_no"
            />
          </div>
          <div className="">
            <InputDisabled label="Member name" value={memberName} />
          </div>
          <div className="flex  items-center">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-full h-16  w-fit object-cover aspect-square overflow-hidden"
            />
            <div className="flex-1">
              <table>
                <tbody className="child:child:pl-2 ">
                  <tr>
                    <td>Member type </td>
                    <td> : Staff</td>
                  </tr>
                  <tr>
                    <td>Id </td>
                    <td> : 123456</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Break title="Select book" />
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
                        Call number*
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                      >
                        Submission after(Day)*
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                      >
                        Submission date
                      </th>

                      <th className=""></th>
                    </tr>
                  </thead>
                  <tbody className=" bg-white divide-y divide-gray-200">
                    {selectBook?.map((curr, index) => {
                      return (
                        <RenderTable
                          key={index}
                          watch={watch}
                          errors={errors}
                          register={register}
                          selectBook={selectBook}
                          setSelectBook={setSelectBook}
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
                              setSelectBook((curr) => {
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
    </div>
  );
}
