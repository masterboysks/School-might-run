import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Attendance = lazy(
  () =>
    import(
      '../../modules/teacher/sidebar-activities/class/class-attendance/attendance/Attendance'
    )
);
const Classess = lazy(
  () =>
    import(
      '../../modules/teacher/sidebar-activities/class/class-attendance/class-attendance/Classess'
    )
);
const ClassRoutine = lazy(
  () =>
    import(
      '../../modules/teacher/sidebar-activities/class/class-routine/class-routine/ClassRoutine'
    )
);
const RoutineCLassRoutine = lazy(
  () =>
    import(
      '../../modules/teacher/sidebar-activities/class/class-routine/routine-class-routine/RoutineCLassRoutine'
    )
);
const MyClasses = lazy(
  () =>
    import(
      '../../modules/teacher/sidebar-activities/class/my-classes/MyClasses'
    )
);
const Slidebar = lazy(
  () => import('../../modules/teacher/sidebar-activities/class/Slidebar')
);

export default function Class() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Slidebar />
          </Suspense>
        }
      >
        <Route
          path="/my-classes"
          element={
            <Suspense>
              <MyClasses />
            </Suspense>
          }
        />
        <Route
          path="/class-attendance"
          element={
            <Suspense>
              <Classess />
            </Suspense>
          }
        />
        <Route
          path="/class-attendance/:classOfSchool/:section"
          element={
            <Suspense>
              <Attendance />
            </Suspense>
          }
        />
        <Route
          path="/class-routine"
          element={
            <Suspense>
              <ClassRoutine />
            </Suspense>
          }
        />
        <Route
          path="/class-routine/:classOfSchool/:section"
          element={
            <Suspense>
              <RoutineCLassRoutine />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
