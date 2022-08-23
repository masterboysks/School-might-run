import React from "react";

export default function Input({
  id,
  name,
  error,
  setError,
  type,
  label,
  value,
  setValue,
  placeholder,
  onChange,
  className,
  step,
  labelClassName,
}) {
  const optional = {};
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              error && "text-red-600"
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}

      <input
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-base focus:border-primary-base   border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey text-sm ${className}`}
        id={id}
        step={step}
        name={name}
        placeholder={placeholder}
        type={type || "text"}
        {...optional}
        value={value}
        onChange={
          onChange ||
          ((e) => {
            setValue && setValue(e.target.value);
          })
        }
        onClick={() => error && setError && setError(false)}
      />
      {error && (
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
}
