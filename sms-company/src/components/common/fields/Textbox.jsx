export const textarea = ({
  id,
  name,
  register,
  required = false,
  errors,
  row,
  label,
  placeholder,
}) => {
  return (
    <>
      <label
        className={`my-6 text-sm ${errors && errors[name] && " text-red-600"}`}
        htmlFor={id}
      >
        {label}
      </label>
      <br />
      <textarea
        id={id}
        row={row || 20}
        placeholder={placeholder}
        {...register(name, { required })}
        className="resize-none  mt-[6px] w-full p- rounded  focus:ring-primary-btn  h-52  border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
      />
      {errors && errors[name] && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            This is a required field.
          </span>
          <br />
        </>
      )}
    </>
  );
};
