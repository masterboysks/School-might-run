import Search from "@mui/icons-material/SearchOutlined";
import { useForm } from "react-hook-form";
import { Select } from "../../../../../../components/common/fields";
const arrayLevel = [{ id: 1, name: "hlo" }];
function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <form className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
      <div className="">
        <Select
          label="Level*"
          value={arrayLevel}
          register={register}
          name="level"
        />
        {/* <label className="my-6 text-sm" htmlFor="Staff type">
          Level*
        </label>
        <br />
        <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
          <option value="Test">Select</option>
        </select> */}
      </div>
      <div className="">
        <Select
          label="Class/Semester*"
          value={arrayLevel}
          register={register}
          name="class"
        />
      </div>

      <div className="">
        <Select
          label="Faculty"
          value={arrayLevel}
          register={register}
          name="faculty"
        />
      </div>
      <div className="">
        <Select
          label="Section*"
          value={arrayLevel}
          register={register}
          name="section"
        />
      </div>
      <div className="h-fit w-fit bg-primary-btn xl:col-span-4 sm:col-span-2 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
        {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
        <Search className="w-4 mx-auto" />
      </div>
    </form>
  );
}

export default Form;
