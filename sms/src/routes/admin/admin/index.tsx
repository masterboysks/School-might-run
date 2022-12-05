import React from 'react';
import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import EditNotice from '../../../modules/admin/sidebar-activities/admin/notice/edit-notice/EditNotice';
import AdminDataSetupRoutes from './AdminDataSetupRoutes';

// Admin import s
const AdminSlidebar = lazy(
  () => import('../../../modules/admin/sidebar-activities/admin/slidebar')
);
const OrginazationSetup = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/organization-setup/OrginazationSetup'
    )
);
const AddClassShedule = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/class-shedule/add-class-shedule/AddClassShedule'
    )
);
const UpgradeClass = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/upgrade-class/upgrade-class/UpgradeClass'
    )
);
const ClassSchedule = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/class-shedule/class-shedule/ClassShedule'
    )
);
const Upgrade = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/upgrade-class/upgrade/Upgrade'
    )
);
const Notice = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/notice/notice/Notice'
    )
);
const NewNotice = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/notice/new-notice/NewNotice'
    )
);
const Event = lazy(
  () =>
    import('../../../modules/admin/sidebar-activities/admin/event/event/Event')
);
const AddEvent = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/event/add-event/AddEvent'
    )
);
const Temeplate = lazy(
  () =>
    import(
      '../../../modules/admin/sidebar-activities/admin/tempelate/Temeplate'
    )
);
export default function AdminDashboardRoutes() {
  return (
    <Routes>
      {/* Admin Routes reside here */}
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <AdminSlidebar />
          </Suspense>
        }
      >
        <Route path="data-setup/*" element={<AdminDataSetupRoutes />}></Route>
        <Route
          path="template"
          element={
            <Suspense fallback="Loading">
              <Temeplate />
            </Suspense>
          }
        ></Route>
        <Route
          path="event-calender"
          element={
            <Suspense fallback="Loading">
              <Event />
            </Suspense>
          }
        ></Route>
        <Route
          path="event-calender/add/:date"
          element={
            <Suspense fallback="Loading">
              <AddEvent />
            </Suspense>
          }
        ></Route>
        <Route
          path="notice"
          element={
            <Suspense fallback="Loading">
              <Notice />
            </Suspense>
          }
        ></Route>
        <Route
          path="notice/new"
          element={
            <Suspense fallback="Loading">
              <NewNotice />
            </Suspense>
          }
        ></Route>
        <Route
          path="notice/edit/:id/:name"
          element={
            <Suspense fallback="Loading">
              <EditNotice />
            </Suspense>
          }
        ></Route>
        <Route
          path="upgrade"
          element={
            <Suspense fallback="Loading">
              <Upgrade />
            </Suspense>
          }
        ></Route>
        <Route
          path="upgrade/class/:classname"
          element={
            <Suspense fallback="Loading">
              <UpgradeClass />
            </Suspense>
          }
        ></Route>
        <Route
          path="class-schedule"
          element={
            <Suspense fallback="Loading">
              <ClassSchedule />
            </Suspense>
          }
        ></Route>
        <Route
          path="class-schedule/add/:classId/:sectionId/:levelId"
          element={
            <Suspense fallback="Loading">
              <AddClassShedule />
            </Suspense>
          }
        ></Route>
        <Route
          path="organization-setup"
          element={
            <Suspense fallback="Loading">
              <OrginazationSetup />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <div className="text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center">
              Page not found-{location.pathname.replace('/', ' ')}
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
