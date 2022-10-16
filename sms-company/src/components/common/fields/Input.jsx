import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
export function input({
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
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm ${className}`}
        id={id}
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

export function password({
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
            {errorText || " This is a required field."}
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
        className=" mt-[6px] w-full p- rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        disabled
        type="text"
        value={value}
      />
    </>
  );
};
export function inputNumber({
  id,
  name,
  errors,
  register,
  label,
  required = false,
  placeholder,
  step,
  min,
  max,
}) {
  const props = { step, min, max };
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
        id={id}
        {...register(name, { required })}
        placeholder={placeholder}
        type="number"
        {...props}
      />
      {errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            {" This is a required field."}
          </span>
        </>
      )}
    </>
  );
}
