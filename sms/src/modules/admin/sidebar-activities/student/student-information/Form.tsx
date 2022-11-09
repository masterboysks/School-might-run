import Search from '@mui/icons-material/SearchOutlined';
import { useForm } from 'react-hook-form';
import Breadnav from '../../../../../components/common/navigation/Breadnav';
import { Input, Select } from '../../../../../components/common/fields';

const pages = [
  { name: 'Student' },
  {
    name: 'Student Information',
    href: '/student/student-information/',
  },
];
const arrayLevel = [
  { name: 'anish', id: 7 },
  { name: 'saurav', id: 4 },
  { name: 'asmita', id: 3 },
  { name: 'prahlad', id: 2 },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();
  return (
    <>
      <Breadnav pages={pages} />
      <form className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
        <div className="">
          <Input
            label="Student ID"
            placeholder="9955112"
            register={register}
            name="student_id"
          />
        </div>
        <div className="">
          <Input
            label="Student Name"
            placeholder="Susank"
            register={register}
            name="student_name"
          />
        </div>
        <div className="">
          <Select
            value={arrayLevel}
            register={register}
            name="class_id"
            label="Class/ Semester"
          />
        </div>
        <div className="">
          <Select
            value={arrayLevel}
            register={register}
            name="faculty"
            label="Faculty"
          />
        </div>
        <div className="">
          <Select
            value={arrayLevel}
            register={register}
            name="section"
            label="Section"
          />
        </div>
        <div className="">
          <Select
            value={arrayLevel}
            register={register}
            name="status"
            label="Status"
          />
        </div>
        <div className="">
          <Select
            value={arrayLevel}
            register={register}
            name="order_by"
            label="Order By"
          />
        </div>
        <div className="h-fit w-fit bg-primary-btn sm:box-content lg:col-span-2 xl:col-span-1 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto" />
        </div>
      </form>
    </>
  );
};

export default Form;
