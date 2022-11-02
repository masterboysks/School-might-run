import React from "react";
import { Link } from "react-router-dom";

export default function Form({
  register,
  handleSubmit,
  onSubmit,
}: {
  register?: any;
  handleSubmit?: any;
  onSubmit?: any;
}) {
  return (
    <>
      Search left
      <Link to="new" className="primary_btn">
        New assignment
      </Link>
    </>
  );
}
