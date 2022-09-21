import React from "react";
import { Route, Routes } from "react-router-dom";
import TeacherProfile from "../../modules/teacher/sidebar-activities/profile/my-profile/MyProfile";
import Slidebar from "../../modules/teacher/sidebar-activities/profile/Slidebar";
import TeacherMain from "../../pages/TeacherMain";
import Class from "./Class";

export default function TeacherRoutes() {
  return (
    <Routes>
      {/* <Route path="/" elements={<TeacherMain />}> */}
      <Route path="dashboard" element={<TeacherMain />}>
        <Route path="profile" element={<Slidebar />}>
          <Route path="my-profile" element={<TeacherProfile />} />
        </Route>
        <Route path="class/*" element={<Class />} />
      </Route>
      {/* </Route> */}
    </Routes>
  );
}
