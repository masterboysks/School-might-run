import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {
  Input,
  MultipleSelect,
  Select,
} from '../../../../../../components/common/fields';
import { useState } from 'react';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../components/common/Break';
import subjectApi from '../../../../../../api/admin/dashboard/admin/data-setup/subjectApi';
import teacherApi from '../../../../../../api/admin/dashboard/staff/teacher/teacherApi';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classSheduleApi from '../../../../../../api/admin/dashboard/admin/classSheduleApi';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classApi from '../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import sectionsApi from '../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi';

const arrayDays = [
  { name: 'Sun', id: 7 },
  { name: 'Mon', id: 1 },
  { name: 'Tue', id: 2 },
  { name: 'Wed', id: 3 },
  { name: 'Thur', id: 4 },
  { id: 5, name: 'Fri' },
  { name: 'Sat', id: 6 },
];

const schema = yup.object().shape({
  level_id: yup.string().required(),
  class_id: yup.string().required(),
  section_id: yup.string().required(),
  teacher_id: yup.string().required(),
  subject_id: yup.string().required(),
  weekdays: yup.array().required().min(1, 'Select at least one item'),
  start_time: yup.string().required(),
  end_time: yup.string().required(),
});
function AddClassShedule() {
  const { levelId, classId, sectionId } = useParams();
  const classDetails = {
    level_id: levelId,
    class_id: classId,
    section_id: sectionId,
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const { data: details } = useQuery({
    queryFn: () => classApi.getWithParams(classDetails),

    select: (d) => d.data.data,
    queryKey: ['classapigetwithparams', classDetails],
  });

  const { data: arraySubjects } = useQuery({
    queryFn: () =>
      subjectApi.getByParams({
        ...classDetails,
        faculty_id: details?.faculty_id,
      }),
    queryKey: [
      'sectionapigetbyclassid',
      { ...classDetails, faculty_id: details?.faculty_id },
    ],
    select: (d) => d.data.data,
    staleTime: Infinity,
    enabled: !!details?.faculty_id,
    onSuccess: (d) => console.log(d),
  });
  const pages = [
    { name: 'Admin' },
    {
      name: 'Class schedule',
      href: '/admin/dashboard/admin/class-schedule/',
    },
    {
      name: `${details?.class_name}-${details?.section_name}`,
      href: '/admin/dashboard/admin/class-schedule/add/class-1-a',
    },
  ];
  const [error, setError] = useState('');
  const [arrayTeachers, setArrayTeachers] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const d = {
      ...data,
      // weekdays: data.weekdays?.map((c) => c.id),
      ...classDetails,
    };

    console.log(d);
    const res = await classSheduleApi.create(d);
    res?.status === 201
      ? navigate('/admin/dashboard/admin/class-schedule')
      : setError('Failed to create class shedule');
  };
  useEffect(() => {
    (async () => {
      const data = await teacherApi.getAll();
      setArrayTeachers(data?.data?.data);
    })();
    // (async () => {
    //   const data = await subjectApi.getAll();
    //   setArraySubjects(data?.data?.data);
    // })();
  }, []);
  // const [days, setDays] = useState([]); //array for multiple
  // const [daysError, setDaysError] = useState(false);

  return (
    <>
      <div>
        <Breadnav pages={pages} />
        {/* details */}
        <div className="lg:flex my-12">
          <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
            <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Class:</span>
                <span className="text-primary-grey-700">
                  {details?.class_name}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Section:</span>
                <span className="text-primary-grey-700">
                  {details?.section_name}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 md:border-b-0 ">
                <span className="text-primary-grey-600">Level:</span>
                <span className="text-primary-grey-700">
                  {details?.level_name}
                </span>
              </div>

              <div className=" flex justify-between py-2">
                <span className="text-primary-grey-600">Faculty:</span>
                <span className="text-primary-grey-700">
                  {details?.faculty_name}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Break title="Class schedule" />
        <form
          className="form-solid w-full my-6 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          {error && (
            <>
              <div className="text-lg font-medium text-red-600">{error}</div>
              <br />
            </>
          )}
          <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
            {/* multiple select */}
            <div className="col-span-full">
              <MultipleSelect
                name="weekdays"
                label="Days*"
                value={arrayDays}
                control={control}
                errors={errors}
                required={true}
              />

              <div className="mt-3">
                *Note:You can select multiple items at once.
              </div>
            </div>
            <div>
              <Select
                id="subject"
                value={arraySubjects}
                label="Subject*"
                required={true}
                errors={errors}
                register={register}
                name="subject_id"
              />
            </div>
            <div>
              <Input
                id="startTimer"
                name="start_time"
                type="time"
                label="Start time*"
                errors={errors}
                register={register}
                required={true}
              />
              {/*cannot not place placeholder for type time */}
            </div>
            {/* input without placeholder */}
            <div>
              <Input
                id="endTimer"
                name="end_time"
                type="time"
                label="End time*"
                register={register}
                errors={errors}
                required={true}
              />
            </div>
            {/* select */}
            <div>
              <Select
                id="subject-teacher"
                name="teacher_id"
                label="Subject teacher*"
                required={true}
                register={register}
                errors={errors}
                value={arrayTeachers}
              />
            </div>
            <div className="col-span-full flex">
              Add subject
              <Link to="/admin/dashboard/admin/data-setup/subject/add">
                <div className="outline outline-1 outline-primary-grey-700 mx-2 rounded cursor-pointer">
                  <AddOutlinedIcon
                    fontSize="inherit"
                    className="text-primary-grey-700"
                  />
                </div>
              </Link>
            </div>

            <div className="col-span-full ml-auto">
              <div className=" w-fit my-auto">
                <Link
                  to="/admin/dashboard/admin/class-schedule"
                  className="secondary_btn"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="primary_btn"
                  disabled={!isValid}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddClassShedule;
