import React from 'react';
import { Suspense } from 'react';
import { lazy } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
const AddStudent = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student/AddStudent'
    )
);
const StudentSlidebar = lazy(
  () => import('../../modules/admin/sidebar-activities/student/Slidebar')
);
const StudentInformation = lazy(
  () =>
    import('../../modules/admin/sidebar-activities/student/Student-information')
);
const StudentAttendance = lazy(
  () =>
    import('../../modules/admin/sidebar-activities/student/Student-attendance')
);
const AddguardianTrue = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student/AddGuardianTrue'
    )
);
const AddguardianFalse = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student/AddGuardianFalse'
    )
);
const WholeClass = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/components-attendance/wholeClass/WholeClass'
    )
);
const StudentProfile = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/components-attendance/studentProfile/StudentProfile'
    )
);
const AddAddress = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student/AddAddress'
    )
);
const AddClassDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student/AddClassDetails'
    )
);
const AddFeeDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student/AddFeeDetails'
    )
);
export default function StudentRoutes() {
  const [hasAnotherChild, setHasAnotherChild] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <StudentSlidebar />
          </Suspense>
        }
      >
        <Route
          path="student-information"
          element={
            <Suspense fallback="Loading">
              <StudentInformation />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-student-details"
          element={
            <Suspense fallback="Loading">
              <AddStudent
                HasAnotherChild={hasAnotherChild}
                setHasAnotherChild={setHasAnotherChild}
              />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-student-details/guardian-true"
          element={
            <Suspense fallback="Loading">
              <AddguardianTrue />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-student-details/guardian-false"
          element={
            <Suspense fallback="Loading">
              <AddguardianFalse />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-address-details"
          element={
            <Suspense fallback="Loading">
              <AddAddress />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-class-details"
          element={
            <Suspense fallback="Loading">
              <AddClassDetails />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-fee-details"
          element={
            <Suspense fallback="Loading">
              <AddFeeDetails />
            </Suspense>
          }
        />
        <Route
          path="student-attendance"
          element={
            <Suspense fallback="Loading">
              <StudentAttendance />
            </Suspense>
          }
        ></Route>

        <Route
          path="student-attendance/:classOfSchool/:section"
          element={
            <Suspense fallback="Loading">
              <WholeClass />
            </Suspense>
          }
        />

        <Route
          path="student-attendance/:classOfSchool/:section/:studentName/:studentId"
          element={
            <Suspense fallback="Loading">
              <StudentProfile />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
