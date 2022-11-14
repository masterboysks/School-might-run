import React from 'react';

export const checkbox = ({
  label, //array with correct index
  name,
  register,
  id = 'form_' + name,
  className = '',
  defaultValue = false,
  shouldUnregister = false,
}) => {
  return (
    <div className={`flex items-center h-5 ${className}`}>
      <input
        id={id}
        type="checkbox"
        {...register(name, { shouldUnregister })}
        defaultChecked={defaultValue}
        className={`focus:ring-primary-btn text-primary-btn  w-4 h-4 border-primary-btn border rounded `}
      />
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-sm text-primary-grey-600">
          {label}
        </label>
      </div>
    </div>
  );
};
export const radio = ({
  name,

  errors = {},
  value,
  register,
  required = false,
  errorText = undefined,
}) => {
  return (
    <>
      {value.map((curr) => (
        <label
          key={curr.id + curr.name}
          htmlFor={curr.id + 'radioButton' + curr.name}
        >
          <input
            type="radio"
            id={curr.id + 'radioButton' + curr.name}
            {...register(name, { required })}
            name={name}
            value={curr.id}
          />
          <span className={`mx-2 ${errors && errors[name] && 'text-red-600'}`}>
            {curr.name}
          </span>
        </label>
      ))}
      {errors && errors[name] && (
        <div className=" md:block hidden text-xs font-light text-red-600">
          {errors[name]?.message || ' This is a required field'}
        </div>
      )}
    </>
  );
};
