import React from "react";
import { Route, Routes } from "react-router-dom";
import MyClasses from "../../modules/teacher/sidebar-activities/class/my-classes/MyClasses";
import Slidebar from "../../modules/teacher/sidebar-activities/class/Slidebar";

export default function Class() {
  return (
    <Routes>
      <Route path="/" element={<Slidebar />}>
        <Route path="/my-classes" element={<MyClasses />} />
      </Route>
    </Routes>
  );
}
