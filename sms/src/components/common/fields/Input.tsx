import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React from 'react';
import { useState } from 'react';
export function input({
  name,
  id = 'form_' + name,
  shouldUnregister = false,
  errors = {},
  register,
  type = 'text',
  label,
  required = false,
  placeholder = '',
  showError = true,
  className = '',
  disabled = false,
  labelClassName = '',
}: {
  id?: string | undefined;
  name: string;
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
  disabled?: boolean;
  labelClassName?: string | undefined;
}) {
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              name
                .split('.')
                .reduce((p, c) => (p && p[c]) || undefined, errors) &&
              'text-red-600'
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}

      <input
        className={`mt-[6px] w-full  rounded   py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400 disabled:bg-primary-grey-100 disabled:text-primary-grey-700  text-primary-grey-600 text-sm ${className}`}
        id={id}
        {...register(name, { required, shouldUnregister })}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
      {showError &&
        name.split('.').reduce((p, c) => (p && p[c]) || undefined, errors) && (
          <>
            <span className="text-xs font-light text-red-600">
              {name
                .split('.') // @ts-ignore
                .reduce((p, c) => (p && p[c]) || undefined, errors)?.message ||
                'This is a required field.'}
            </span>
          </>
        )}
    </>
  );
}

export function password({
  name,
  id = 'form_' + name,

  errors = {},
  register,
  label,
  required = false,
  placeholder = '',
  showError = true,
  className = '',
  // step,
  labelClassName = '',
}) {
  const [visiblity, setVisiblity] = useState(false);
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && 'text-red-600'
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
          // step={step}
          {...register(name, { required })}
          placeholder={placeholder}
          type={visiblity ? 'text' : 'password'}
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
            {errors[name]?.message || ' This is a required field.'}
          </span>
        </>
      )}
    </>
  );
}
export const inputDisabled = ({
  label,

  value = '',
}: {
  label: string | undefined;
  value?: string | number;
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
  placeholder = '',
  step = '',
  min,
  shouldUnregister,
  max,
  disabled = false,
  defaultValue = '0',
  id = 'form_' + name,
}: {
  errors?: {} | undefined;
  register: any;
  label: any;
  name?: any;
  required?: boolean | undefined;
  placeholder?: string | undefined;
  step?: string | undefined;
  min?: number;
  max?: number;
  defaultValue?: string;
  disabled?: boolean;
  id?: string | undefined;
  shouldUnregister?: boolean;
}) {
  // console.log(
  //   name.split('.').reduce((p, c) => (p && p[c]) || undefined, errors)
  // );
  const props = { step, min, max, placeholder, id };
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              name
                .split('.')
                .reduce((p, c) => (p && p[c]) || undefined, errors) &&
              'text-red-600'
            } text-sm `}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}

      <input
        className={`mt-[6px] w-full  rounded   py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400 disabled:bg-primary-grey-100 disabled:text-primary-grey-700  text-primary-grey-600 text-sm `}
        {...register(name, {
          required,
          valueAsNumber: true,

          shouldUnregister,
        })}
        defaultValue={defaultValue}
        type="number"
        disabled={disabled}
        {...props}
      />
      {errors &&
        name.split('.').reduce((p, c) => (p && p[c]) || undefined, errors) && (
          <>
            <span className="text-xs font-light text-red-600">
              {name
                .split('.') // @ts-ignore
                .reduce((p, c) => (p && p[c]) || undefined, errors)?.message ||
                ' This is a required field.'}
            </span>
          </>
        )}
    </>
  );
}
