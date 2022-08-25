export const Checkbox = ({
  label, //array with correct index
  name,
  register,
  id,
  className,
}) => {
  return (
    <div className={`flex items-center h-5 ${className}`}>
      <input
        id={id}
        type="checkbox"
        {...register(name)}
        className={`focus:ring-primary-base text-primary-base  w-4 h-4 border-primary-base/90 border rounded `}
      />
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-sm text-primary-grey-700">
          {label}
        </label>
      </div>
    </div>
  );
};
