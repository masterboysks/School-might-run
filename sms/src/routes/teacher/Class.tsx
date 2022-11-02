import React from "react";
import { Route, Routes } from "react-router-dom";
import Attendance from "../../modules/teacher/sidebar-activities/class/class-attendance/attendance/Attendance";
import Classess from "../../modules/teacher/sidebar-activities/class/class-attendance/class-attendance/Classess";
import ClassRoutine from "../../modules/teacher/sidebar-activities/class/class-routine/class-routine/ClassRoutine";
import RoutineCLassRoutine from "../../modules/teacher/sidebar-activities/class/class-routine/routine-class-routine/RoutineCLassRoutine";
import MyClasses from "../../modules/teacher/sidebar-activities/class/my-classes/MyClasses";
import Slidebar from "../../modules/teacher/sidebar-activities/class/Slidebar";

export default function Class() {
  return (
    <Routes>
      <Route path="/" element={<Slidebar />}>
        <Route path="/my-classes" element={<MyClasses />} />
        <Route path="/class-attendance" element={<Classess />} />
        <Route
          path="/class-attendance/:classOfSchool/:section"
          element={<Attendance />}
        />
        <Route path="/class-routine" element={<ClassRoutine />} />
        <Route
          path="/class-routine/:classOfSchool/:section"
          element={<RoutineCLassRoutine />}
        />
      </Route>
    </Routes>
  );
}
