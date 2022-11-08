import React from 'react';
import { useForm } from 'react-hook-form';
import Table from './Table';
import Details from './Details';
export default function Form() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  return (
    <>
      Call number search left
      <Details />
      <Table />
    </>
  );
}
