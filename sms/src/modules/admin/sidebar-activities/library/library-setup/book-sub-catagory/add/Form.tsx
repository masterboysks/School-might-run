import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input, Select } from '../../../../../../../components/common/fields';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';
import { useEffect } from 'react';
import levelApi from '../../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import { useForm } from 'react-hook-form';
import facultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi';
import React from 'react';

const Form = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm();
  const [arrayCategory, setArrayCategory] = useState([
    {
      name: 'hgo',
      id: 'jkhgsa',
    },
  ]);
  const [error, setError] = useState('');
  //   useEffect(() => {
  //     (async () => {
  //       const data = await levelApi.getAll();
  //       setArrayLevel(data?.data?.data);
  //     })();
  //   }, []);

  //   const navigate = useNavigate();
  const onSubmit = async (d) => console.log(d);
  //   const onSubmit = async (d) => {
  //     const res = await facultyApi.create(d);
  //     res?.status === 201
  //       ? navigate('/admin/dashboard/admin/data-setup/faculty')
  //       : setError('Failed to create faculty');
  //   };
  return (
    <>
      <Break title="Add book sub-category" />
      <form
        className="form-solid w-full my-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <>
            <div className="text-lg font-medium text-red-600">{error}</div>
            <br />
          </>
        )}
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="Book category*"
              value={arrayCategory}
              name="category_id"
              required={true}
              register={register}
              errors={errors}
            />
          </div>
          <div>
            <Input
              placeholder="Physic"
              name="sub_category"
              label="Sub category*"
              errors={errors}
              register={register}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/library/library-setup/book-sub-category"
                className="secondary_btn"
              >
                Cancel
              </Link>
              <button type="submit" className="primary_btn" disabled={!isValid}>
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
