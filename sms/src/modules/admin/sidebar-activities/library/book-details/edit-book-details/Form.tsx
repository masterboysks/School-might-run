import React, { useState } from 'react';
import {
  Input,
  InputNumber,
  Select,
} from '../../../../../../components/common/fields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
const dfjkh = [
  {
    name: 'Horror',
    id: 'horror',
  },
  {
    name: 'Si-Fi',
    id: 'Si-Fi',
  },
  {
    name: 'Personal development',
    id: 'Personal development',
  },
  {
    name: 'Self help',
    id: 'Self help',
  },
  {
    name: 'Educational',
    id: 'Educational',
  },
  {
    name: 'Romance',
    id: 'Romance',
  },
];
const jhdfgjkhds = [
  {
    name: 'bhoot',
    id: 'bhoot',
  },
  {
    name: 'jhgsjkshfd',
    id: 'jhgsjkshfd',
  },
];
const retvgsfe = [
  {
    name: 'bhoot',
    id: 'bhoot',
  },
  {
    name: 'jhgsjkshfd',
    id: 'jhgsjkshfd',
  },
];
const schema = yup.object().shape({
  category: yup.string().required(''),
  sub_category: yup.string().required(''),
  language: yup.string().required(''),
  book_title: yup
    .string()
    .required('')
    .max(50, 'Title cannot be longer than 50 characters.'),
  author_name: yup
    .string()
    .required('')
    .min(3, 'Author name needs at least 3 characters.')
    .max(130, 'Cannot be longer than 130 characters.'),
  isbn: yup
    .string()
    .required('')
    .matches(
      /^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/g,
      'Please enter valid format'
    )
    .max(80, 'ISBN cannot be longer than 80 characters.'),
  no_of_pages: yup
    .string()
    .required('')
    .max(4, 'Cannot be longer than 4 characters.'),
  volume: yup.string().max(50, 'Cannot be longer than 50 characters.'),
  keywords: yup.string().max(100, 'Cannot be longer than 100.'),
  book_edition: yup.string().required('').max(50, 'Cannot be longer then 50.'),
  published_date: yup.string().required(''),
  publisher_name: yup
    .string()
    .required('')
    .min(3, 'Publisher name needs at least 3 characters.')
    .max(30, 'Cannot be longer than 30 characters.'),
  book_price: yup
    .string()
    .required('')
    .max(5, 'Cannot be longer than 5 characters.'),
});
export default function Form() {
  const [arrayCategory, setArrayCategory] = useState(dfjkh);
  const [arraySubCategory, setArraySubCategory] = useState(jhdfgjkhds);
  const [arrayLanguage, setArrayLanguage] = useState(retvgsfe);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const onSubmit = (d) => {
    localStorage.setItem(
      'jhsgbbvppi',
      JSON.stringify({
        isbn: d.isbn,
        year: d.published_date.split('-')[0].slice(1),
      })
    );
    console.log({ year: d.published_date.split('-')[0].slice(1) });
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="sm:grid-cols-2 mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Select
            value={arrayCategory}
            register={register}
            label="Category*"
            name="category"
            errors={errors}
          />
        </div>
        <div className="">
          <Select
            value={arraySubCategory}
            register={register}
            label="Sub category*"
            name="sub_category"
            errors={errors}
          />
        </div>
        <div className="">
          <Select
            value={arrayLanguage}
            register={register}
            label="Language*"
            errors={errors}
            name="language"
          />
        </div>
        <div className="">
          <Input
            name="book_title"
            register={register}
            label="Book title*"
            errors={errors}
            placeholder="University Physics"
          />
        </div>
        <div className="">
          <Input
            name="author_name"
            register={register}
            label="Author names*"
            errors={errors}
            placeholder="Ram chandra, Hari shing"
          />
        </div>
        <div className="">
          <Input
            name="isbn"
            register={register}
            placeholder="978-3-16-148410-0"
            label="ISBN*"
            errors={errors}
          />
        </div>

        <div className="">
          <Input
            name="no_of_pages"
            register={register}
            label="Number of pages*"
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            name="volume"
            register={register}
            placeholder="50cm, 40cm, 40cm"
            label="Volume"
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            name="keywords"
            register={register}
            label="Keyword"
            placeholder="Science,Physics"
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            name="book_edition"
            register={register}
            label="Book edition*"
            placeholder="2022 Second half edition"
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            name="published_date"
            register={register}
            label="Published date*"
            type="date"
            placeholder="2022 Second half edition"
            errors={errors}
          />
        </div>
        <div className="">
          <Input
            name="publisher_name"
            register={register}
            label="Publisher name*"
            placeholder="Harri dhami"
            errors={errors}
          />
        </div>
        <div className="">
          <InputNumber
            name="book_price"
            register={register}
            label="Book Price*"
            placeholder="99999"
            errors={errors}
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Link
          to="admin/dashboard/library/book-details"
          className="secondary_btn my-6 w-fit"
        >
          Cancle
        </Link>
        <input
          type="submit"
          disabled={!isValid}
          className="primary_btn w-fit  my-6 "
          value="Save"
        />
      </div>
    </form>
  );
}
