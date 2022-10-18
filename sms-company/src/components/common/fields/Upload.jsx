export const upload = ({
  label,
  name,
  errors,
  register,
  required = false,
  showError = true,
  uploadText,
  errorText,
  id,
  watch,
  accept,
}) => {
  let logo;
  watch && (logo = watch(name));
  return (
    <>
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
            <input
              type="file"
              name={name}
              id={id}
              className="sr-only"
              {...register(name, { required })}
              accept={accept}
            />
            {/* className="text-primary-gray- hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 hidden px-3 py-2 ml-5 text-sm font-medium leading-4 bg-white rounded-md" */}
            <label
              htmlFor={id}
              className="bg-primary-grey-200 cursor-pointer border-primary-field border-[1px] rounded ml-2 p-1 text-primary-grey-700"
            >
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
    </>
  );
};
export const uploadPhoto = ({
  label,
  name,
  errors,
  register,
  required = false,
  showError = true,
  uploadText,
  errorText,
  id = Math.random() + "hdfhdfkhfkdh",
  watch,
}) => {
  let logo;
  watch && (logo = watch(name));
  return (
    <>
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
            <input
              type="file"
              name={name}
              id={id}
              className="sr-only"
              {...register(name, { required })}
              accept="image/*"
            />
            {/* className="text-primary-gray- hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 hidden px-3 py-2 ml-5 text-sm font-medium leading-4 bg-white rounded-md" */}
            <label
              htmlFor={id}
              className="bg-primary-grey-200 cursor-pointer border-primary-field border-[1px] rounded ml-2 p-1 text-primary-grey-700"
            >
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
    </>
  );
};
