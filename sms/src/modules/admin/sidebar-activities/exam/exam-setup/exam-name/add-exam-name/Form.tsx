import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Input, Select } from '../../../../../../../components/common/fields';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../../../../components/common/Buttons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray } from 'react-hook-form';
import { useQuery, useMutation } from '@tanstack/react-query';
import levelApi from '../../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import ExamNameApi from '../../../../../../../api/admin/dashboard/exam/exam-setup/ExamNameApi';
export default function Form() {
  const {
    register,
    formState: { isValid, errors },
    control,
    reset,
    watch,
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      exam_name: [' '],
      level_id: '',
    },
  });
  const level_id = watch('level_id');
  const { data: examnamedata } = useQuery({
    queryFn: () => ExamNameApi.getByLevelId(level_id),
    queryKey: ['exam/exam-setup/examname/getone', level_id],
    staleTime: Infinity,
    enabled: !!level_id,
    select: (d) => d?.data.data,
  });
  useEffect(() => {
    reset({ exam_name: examnamedata, level_id });
  }, [examnamedata]);

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'exam_name',

    rules: { minLength: 1 },
  });
  const { data: arrayLevel } = useQuery({
    queryFn: () => levelApi.getAll(),
    queryKey: ['levelapiget'],
    staleTime: 300000,
    select: (d) => d?.data.data,
  });
  const mutation = useMutation({
    mutationFn: (formData) => {
      return ExamNameApi.create(formData);
    },
    onSuccess: (d) => navigate(-1),
    onError: () => setError('Failed to create exam name'),
  });

  return (
    <form
      className="form-solid w-full my-6 rounded-md"
      onSubmit={handleSubmit((d) => mutation.mutate(d))}
    >
      {error && (
        <>
          <div className="text-lg font-medium text-red-600">{error}</div>
          <br />
        </>
      )}
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Select
            disabled={!arrayLevel}
            label="Level*"
            value={arrayLevel}
            name="level_id"
            register={register}
            errors={errors}
            required={true}
          />
        </div>
        <div className="lg:row-start-auto row-start-2">
          {fields.map((c, i) => (
            <div className=" relative h-fit" key={c.id}>
              <Input
                placeholder="Preboard"
                className={' h-fit '}
                label={i === 0 ? 'Exam name' : undefined}
                name={'exam_name.' + i}
                register={register}
              />
              {i === 0 ? null : (
                <div
                  className=" -right-10 text-primary-grey-700 top-[10px] absolute p-1 bg-white rounded-full shadow"
                  onClick={() => remove(i)}
                >
                  <CloseOutlinedIcon fontSize="inherit" />
                </div>
              )}
            </div>
          ))}

          {/* <Input
            label="Exam name*"
            placeholder="First term"
            value={examName}
            setValue={setExamName}
            error={errorExamName}
            setError={setErrorExamName}
          /> */}

          {/* <>
            {addExamName.map((c, i, array) => (
              <div className=" relative h-fit" key={i}>
                <Input
                  placeholder="Preboard"
                  className={' h-fit '}
                  value={c.value}
                  // value={c.value}
                  onChange={(e) => {
                    let temp = [...array];
                    temp[i]['value'] = e.target.value;

                    setAddExamName(temp);
                  }}
                />

                <div
                  className=" -right-10 text-primary-grey-700 top-[10px] absolute p-1 bg-white rounded-full shadow"
                  onClick={() => {
                    setAddExamName(addExamName.slice(0, -1));
                  }}
                >
                  <CloseOutlinedIcon fontSize="inherit" />
                </div>
              </div>
            ))}
          </> */}

          <button
            type="button"
            className="text-primary-grey-700 flex items-center justify-end w-full mt-3"
            onClick={() => append(' ')}
          >
            <div className="">Add</div>
            <div className="icon border-primary-field h-fit p-1 pt-0 ml-2 border rounded-lg">
              <AddOutlinedIcon fontSize="inherit" />
            </div>
          </button>
        </div>
      </div>
      <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="md:flex-row w-fit lg:col-span-2 flex flex-col my-6 ml-auto">
          <div className=" w-fit">
            <Link to="/admin/dashboard/exam/exam-setup/exam-name">
              <SecondaryButton>Cancel</SecondaryButton>
            </Link>
            <PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
          </div>
        </div>
      </div>
    </form>
  );
}
