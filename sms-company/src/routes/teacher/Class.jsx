import React from "react";
import { Route, Routes } from "react-router-dom";
import Attendence from "../../modules/teacher/sidebar-activities/class/class-attendence/attendence/Attendence";
import Classess from "../../modules/teacher/sidebar-activities/class/class-attendence/Classess";
import ClassRoutine from "../../modules/teacher/sidebar-activities/class/class-routine/ClassRoutine";
import MyClasses from "../../modules/teacher/sidebar-activities/class/my-classes/MyClasses";
import Slidebar from "../../modules/teacher/sidebar-activities/class/Slidebar";

export default function Class() {
  return (
    <Routes>
      <Route path="/" element={<Slidebar />}>
        <Route path="/my-classes" element={<MyClasses />} />
        <Route path="/class-attendence" element={<Classess />} />
        <Route
          path="/class-attendence/:classOfSchool/:section"
          element={<Attendence />}
        />
        <Route path="/class-routine" element={<ClassRoutine />} />
        <Route
          path="/class-routine/:classOfSchool/:id"
          element={<ClassRoutine />}
        />
      </Route>
    </Routes>
  );
}
