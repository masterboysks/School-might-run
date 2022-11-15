import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import staffAPI from '../../../../../../../../api/admin/dashboard/staff/staffAPI';
import {
  Input,
  Upload,
} from '../../../../../../../../components/common/fields';

const Form = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const {
    register,
    watch,
    reset,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    const form = new FormData();
    form.append('document_name', data['document_name']);
    form.append('document_file', data['document_file'][0]);
    try {
      const res = await staffAPI.createDocument(id, form);
      res.status === 201
        ? navigate(`/admin/dashboard/staff/staff-information/${id}/document`)
        : setMessage(res?.response?.data?.message);
    } catch (error) {
      // console.log(error);
    }
    // to=
  };
  return (
    <form
      className="form-solid md:w-10/12 lg:w-8/12 w-full my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {message && (
        <>
          <div className="!text-red-600 font-medium text-lg">{message}</div>
          <br />
        </>
      )}
      <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
        <div className="">
          <Input
            name="document_name"
            register={register}
            errors={errors}
            required={true}
            label="Name"
            placeholder="Citizenship"
          />
        </div>
        <div className="">
          <Upload
            name="document_file"
            register={register}
            errors={errors}
            required={true}
            label="Document"
            watch={watch}
            id="document_file"
            accept="image/*,.pdf"
          />
        </div>
        <div className=" col-span-full">
          <div className=" w-fit ml-auto">
            <Link
              to={`/admin/dashboard/staff/staff-information/${id}/document`}
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
  );
};

export default Form;
