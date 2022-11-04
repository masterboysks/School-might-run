import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useState } from "react";
export function input({
  name,
  id = "form_" + name,
  shouldUnregister = false,
  errors = {},
  register,
  type = "text",
  label,
  required = false,
  placeholder = "",
  showError = true,
  className = "",
  labelClassName = "",
}: {
  id?: string | undefined;
  name: any;
  shouldUnregister?: boolean | undefined;
  errors?: {} | undefined;
  errorText?: string | undefined;
  register: any;
  type?: string | undefined;
  label: string | undefined;
  required?: boolean;
  placeholder?: string;
  showError?: boolean;
  className?: string;
  labelClassName?: string | undefined;
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
        className={`mt-[6px] w-full p- rounded   py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm ${className}`}
        id={id}
        {...register(name, { required, shouldUnregister })}
        placeholder={placeholder}
        type={type}
      />
      {showError && errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            {errors[name]?.message || "This is a required field."}
          </span>
        </>
      )}
    </>
  );
}

export function password({
  name,
  id = "form_" + name,

  errors = {},
  register,
  label,
  required = false,
  placeholder = "",
  showError = true,
  className = "",
  step,
  labelClassName = "",
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
          className={`mt-[6px] w-full p- rounded pr-8  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm ${className}`}
          id={id}
          step={step}
          {...register(name, { required })}
          placeholder={placeholder}
          type={visiblity ? "text" : "password"}
        />
        <div
          className="right-1 top-4 absolute"
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
            {errors[name]?.message || " This is a required field."}
          </span>
        </>
      )}
    </>
  );
}
export const inputDisabled = ({
  label,

  value = "",
}) => {
  return (
    <>
      {label && (
        <>
          <label className="my-6 text-sm">{label}</label> <br />
        </>
      )}

      <input
        className=" mt-[6px] w-full py-3 rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        disabled
        type="text"
        value={value}
      />
    </>
  );
};
export function inputNumber({
  errors = {},
  register,
  label,
  name = label,
  required = false,
  placeholder = "",
  step = "",
  min = "",
  max = "",
  id = "form_" + name,
}) {
  const props = { step, min, max, placeholder, id };
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && "text-red-600"
            } text-sm `}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}

      <input
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm`}
        {...register(name, { required })}
        type="number"
        {...props}
      />
      {errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            {errors[name]?.message || " This is a required field."}
          </span>
        </>
      )}
    </>
  );
}
