import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ApplyLeave from '../../modules/teacher/sidebar-activities/profile/apply-leave/ApplyLeave';
import TeacherProfile from '../../modules/teacher/sidebar-activities/profile/my-profile/MyProfile';
import Slidebar from '../../modules/teacher/sidebar-activities/profile/Slidebar';
import TeacherMain from '../../pages/TeacherMain';
import Class from './Class';
import Exam from './Exam';
import LMS from './LMS';

export default function TeacherRoutes() {
  return (
    <Routes>
      {/* <Route path="/" elements={<TeacherMain />}> */}
      <Route path="dashboard" element={<TeacherMain />}>
        <Route path="profile" element={<Slidebar />}>
          <Route path="my-profile" element={<TeacherProfile />} />
          <Route path="apply-leave" element={<ApplyLeave />} />
        </Route>
        <Route path="class/*" element={<Class />} />
        <Route path="lms/*" element={<LMS />} />
        <Route path="exam/*" element={<Exam />} />
      </Route>
      {/* </Route> */}
    </Routes>
  );
}
