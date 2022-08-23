export const Checkbox = ({
  label, //array with correct index
  name,
  selected, //true or false
  setSelected,
  dataTitle,
  dataValue,
  id,
  className,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  return (
    <div className={`flex items-center h-5 ${className}`}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={selected}
        {...optional}
        className={`focus:ring-primary-base text-primary-base  w-4 h-4 border-gray-300 rounded `}
        onChange={(e) => {
          setSelected(e.currentTarget.checked);
        }}
      />
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-sm text-primary-grey-700">
          {label}
        </label>
      </div>
    </div>
  );
};
