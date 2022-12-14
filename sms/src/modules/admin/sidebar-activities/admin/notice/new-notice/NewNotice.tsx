import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Input,
  MultipleSelect,
  Textarea,
  UploadPhoto,
  DateInput,
} from '../../../../../../components/common/fields';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../components/common/Break';
import { useForm } from 'react-hook-form';
import noticeApi from '../../../../../../api/admin/dashboard/admin/noticeApi';
import { useEffect } from 'react';
import React from 'react';

const pages = [
  { name: 'Admin' },
  {
    name: 'Push notification',
    href: '/admin/dashboard/admin/notice',
  },
  {
    name: 'New notice',
    href: '/admin/dashboard/admin/notice/new',
  },
];

function NewNotice() {
  const [date, setDate] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm();
  const [arraySendTo, setArraySendTo] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const d = {
      ...data,
      // send_to: JSON.stringify(data.send_to?.map((c) => c.id)),
      expiry_date: date.date || date,
    };
    const form = new FormData();
    for (const name in d) {
      form.append(name, d[name]);
    }

    form.delete('send_to');
    data.send_to?.map((c, i) => form.append(`send_to[${i}]`, c));
    d.document.length === 1
      ? form.append('document', d.document[0])
      : form.append('document', '');
    const res = await noticeApi.create(form);
    res?.status === 201
      ? navigate('/admin/dashboard/admin/notice')
      : setError('Failed to create a notice');
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await noticeApi.sendTo();
        setArraySendTo(data?.data?.data?.data);
      } catch (e) {
        // console.warn(e);
      }
    })();
  }, []);

  return (
    <div>
      <Breadnav pages={pages} />
      <Break title="New notice" />
      <form
        className="form-solid w-full my-4 space-y-4 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <>
            <div className="text-lg font-medium text-red-600">{error}</div>
            <br />
          </>
        )}
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <MultipleSelect
              value={arraySendTo}
              label="Send to*"
              name="send_to"
              control={control}
              errors={errors}
              required={true}
            />
            Note:You can select multiple items
          </div>
        </div>
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <Input
              label="Notice title*"
              register={register}
              required={true}
              errors={errors}
              name="title"
              placeholder="National Education Board"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <Textarea
              label="Notice description*"
              placeholder=" Description here"
              id="notice_description"
              name="description"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <UploadPhoto
              label="Document"
              id="document_form"
              name="document"
              register={register}
              watch={watch}
            />
          </div>
          {/* <div>
            <Input
              label="Notice expire date*"
              type="date"
              register={register}
              name="expiry_date"
              id="expire_date"
              required={true}
              errors={errors}
            />
          </div> */}
          <div className="">
            <DateInput
              register={register}
              selected={date}
              setSelected={setDate}
              label="Date"
            />
          </div>
        </div>

        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/notice"
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
    </div>
  );
}

export default NewNotice;
