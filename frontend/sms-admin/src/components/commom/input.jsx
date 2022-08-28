import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export default function Input({
  id,
  name,
  shouldUnregister = false,
  errors,
  errorText,
  register,
  type,
  label,
  required = false,
  placeholder,
  showError = true,
  className,
  step,
  labelClassName,
}) {
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && "text-red-600"
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}

      <input
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-base focus:border-primary-base  py-3 border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey text-sm ${className}`}
        id={id}
        step={step}
        {...register(name, { required, shouldUnregister })}
        placeholder={placeholder}
        type={type || "text"}
      />
      {showError && errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            {errorText || " This is a required field."}
          </span>
        </>
      )}
    </>
  );
}

export function Select({
  id,
  name,

  errors,
  errorText,
  register,
  value: options,
  label,
  required = false,
  selected,
  showError = true,
  className,
  labelClassName,
}) {
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && "text-red-600"
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}
      <select
        {...register(name, { required })}
        id={id}
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-base focus:border-primary-base  py-3 border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey text-sm ${className}`}
      >
        {selected === "Select" && <option value="">--Select--</option>}
        {options.map((curr) => (
          <option value={curr} key={curr}>
            {curr}
          </option>
        ))}
      </select>
      {showError && errors && errors[name] && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            {errorText || " This is a required field."}
          </span>
          <br />
        </>
      )}
    </>
  );
}
export function Password({
  id,
  name,

  errors,
  errorText,
  register,
  label,
  required = false,
  placeholder,
  showError = true,
  className,
  step,
  labelClassName,
}) {
  const [visiblity, setVisiblity] = useState(false);
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && "text-red-600"
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}
      <div className="relative">
        <input
          className={`mt-[6px] w-full p- rounded pr-8  focus:ring-primary-base focus:border-primary-base  py-3 border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey text-sm ${className}`}
          id={id}
          step={step}
          {...register(name, { required })}
          placeholder={placeholder}
          type={visiblity ? "text" : "password"}
        />
        <div
          className="absolute right-1 top-4 "
          onClick={() => {
            setVisiblity(!visiblity);
          }}
        >
          {visiblity ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
      </div>
      {showError && errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            {errorText || " This is a required field."}
          </span>
        </>
      )}
    </>
  );
}
export function InputWithSuffix({
  id,
  name,

  errors,
  register,
  type,
  label,
  required = false,
  placeholder,
  showError = true,
  className,
  step,
  labelClassName,
  suffix,
}) {
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && "text-red-600"
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
            <span className="sm:hidden pl-2"> ({suffix})</span>
          </label>
          <br />
        </>
      )}
      <div className="relative">
        <input
          className={`mt-[6px] w-full p- rounded  focus:ring-primary-base focus:border-primary-base  py-3 border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize pr-44 text-primary-grey text-sm ${className}`}
          id={id}
          step={step}
          {...register(name, { required })}
          placeholder={placeholder}
          type={type || "text"}
        />
        <div className="absolute inset-y-0 pt-2 hidden right-0 pr-3 sm:flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            {suffix}
          </span>
        </div>
      </div>
      {showError && errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            This is a required field.
          </span>
          <br />
        </>
      )}
    </>
  );
}
