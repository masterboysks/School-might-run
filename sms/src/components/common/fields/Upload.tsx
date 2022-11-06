import UploadOutlined from '@mui/icons-material/UploadOutlined';
import React from 'react';

export const upload = ({
  label,
  name,

  errors = {},
  register,
  required = false,
  showError = true,
  uploadText,
  id = 'form_' + name,
  watch,
  accept,
  multiple,
}: {
  label: any;
  name: any;
  errors?: {} | undefined;
  register: any;
  required?: boolean | undefined;
  showError?: boolean | undefined;
  uploadText?: any;
  errorText?: string | undefined;
  id?: string | undefined;
  watch: any;
  accept?: string | undefined;
  multiple?: boolean | undefined;
}) => {
  let logo;
  watch && (logo = watch(name));
  return (
    <>
      <label
        htmlFor={id}
        className={` ${
          errors && errors[name] && ' text-red-600 '
        } block text-sm`}
      >
        {label}
      </label>
      <div className=" mt-[6px] sm:col-span-2 ">
        <div className=" flex w-full px-3 text-primary-grey-600 py-2.5 h- border border-primary-btn border-dashed rounded-md focus-within:border-solid focus-within:ring-1 focus-within:ring-primary-btn focus-within:text-primary-btn">
          <div className=" w-full space-y-1">
            <label
              htmlFor={id}
              className="  within:outline-none   flex items-center justify-between w-full text-sm bg-white rounded-md cursor-pointer"
            >
              <div>
                {logo && logo.length === 1
                  ? logo[0].name
                  : uploadText || 'Choose a file to upload'}
              </div>
              <div className="text-primary-btn">
                <UploadOutlined />
              </div>
              <input
                name={name}
                id={id}
                type="file"
                className="sr-only"
                {...register(name, { required })}
                accept={accept}
                multiple={multiple}
              />
            </label>
          </div>
        </div>
      </div>
      {showError && errors[name] && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            {errors[name]?.message || ' This is a required field.'}
          </span>
          <br />
        </>
      )}
    </>
  );
};
export const uploadPhoto = ({
  label,
  name,

  errors = {},
  register,
  required = false,
  showError = true,
  uploadText = '',
  id = 'form_' + name,
  watch,
  multiple = false,
}) => {
  let logo;
  watch && (logo = watch(name));
  return (
    <>
      <label
        htmlFor={id}
        className={` ${
          errors && errors[name] && ' text-red-600 '
        } block text-sm`}
      >
        {label}
      </label>
      <div className=" mt-[6px] sm:col-span-2 ">
        <div className=" flex w-full px-3 text-primary-grey-600 py-2.5 border border-primary-btn border-dashed rounded-md focus-within:border-solid focus-within:ring-primary-btn  focus-within:text-primary-btn">
          <div className=" w-full space-y-1">
            <label
              htmlFor={id}
              className="  within:outline-none   flex items-center justify-between w-full text-sm bg-white rounded-md cursor-pointer"
            >
              <div>
                {logo && logo.length === 1
                  ? logo[0].name
                  : uploadText || 'Choose a file to upload'}
              </div>
              <div className="text-primary-btn">
                <UploadOutlined />
              </div>
              <input
                name={name}
                id={id}
                type="file"
                className="sr-only"
                {...register(name, { required })}
                accept="image/*"
                multiple={multiple}
              />
            </label>
          </div>
        </div>
      </div>
      {showError && errors[name] && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            {errors[name]?.message || ' This is a required field.'}
          </span>
          <br />
        </>
      )}
    </>
  );
};
{
  /* <>
<div className="">
  <label
    htmlFor={id}
    className={`${
      errors && errors[name] && "text-red-600 "
    } block text-sm`}
  >
    {label}
  </label>
  <div className="mt-[6px] sm:mt-0 sm:col-span-2">
    <div className="text-primary-gray-700 flex items-center">
      <span className=" w-12 h-12 overflow-hidden rounded-full">
        <svg
          className="w-full h-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      className="text-primary-gray- hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 hidden px-3 py-2 ml-5 text-sm font-medium leading-4 bg-white rounded-md"
      <label
        htmlFor={id}
        className="bg-primary-grey-200 cursor-pointer border-primary-field border-[1px] rounded  mt-3 py-2 px-1 w-full text-primary-grey-700 focus-within:border-primary-btn truncate"
      >
        {" "}
        <input
          type="file"
          name={name}
          id={id}
          className="sr-only"
          {...register(name, { required })}
          accept="image/*"
        />
        {logo && logo.length === 1
          ? logo[0].name
          : uploadText || "Choose a file to upload"}
      </label>
    </div>
  </div>
  {showError && errors && errors[name] && (
    <>
      <span className="text-xs font-light text-red-600">
        {errorText || " This is a required field."}
      </span>
      <br />
    </>
  )}
</div>
</> */
}
