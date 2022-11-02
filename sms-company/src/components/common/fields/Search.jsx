export function searchBar({
  id = Math.random() + "uehwsfdkh",
  register,
  name,
}) {
  return (
    <div className=" relative w-full">
      <div className="top-0 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="text-primary-grey-600 w-4 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id={id}
        className=" mt-[6px] border  border-primary-btn text-primary-grey-600 text-sm rounded focus:ring-primary-btn block w-full pl-10 p-2 "
        placeholder="Search"
        {...register(name)}
      />
    </div>
  );
}
