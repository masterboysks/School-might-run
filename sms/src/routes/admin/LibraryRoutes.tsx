import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LibrarySlidebar from "../../modules/admin/sidebar-activities/library/Slidebar";
import RouteSetupAdd from "../../modules/admin/sidebar-activities/transportation/route-setup/route-setup-add/page";
import RouteSetupEdit from "../../modules/admin/sidebar-activities/transportation/route-setup/route-setup-edit/page";
import RouteSetup from "../../modules/admin/sidebar-activities/transportation/route-setup/route-setup/page";
import TransportationSlidebar from "../../modules/admin/sidebar-activities/transportation/Slidebar";
import StudentWiseDetails from "../../modules/admin/sidebar-activities/transportation/student-wise-details/page";
import VechicleRouteSetupAdd from "../../modules/admin/sidebar-activities/transportation/vehicle-route-setup/vehicle-route-setup-add/page";
import VehicleRouteSetupEdit from "../../modules/admin/sidebar-activities/transportation/vehicle-route-setup/vehicle-route-setup-edit/page";
import VehicleRouteSetup from "../../modules/admin/sidebar-activities/transportation/vehicle-route-setup/vehicle-route-setup/page";
import VehicleSetupAdd from "../../modules/admin/sidebar-activities/transportation/vehicle-setup/vehicle-setup-add/page";
import VechicleSetupEdit from "../../modules/admin/sidebar-activities/transportation/vehicle-setup/vehicle-setup-edit/page";
import VehicleSetup from "../../modules/admin/sidebar-activities/transportation/vehicle-setup/vehicle-setup/page";
export default function LibraryRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <LibrarySlidebar />
          </Suspense>
        }
      >
        <Route
          path="book-details"
          element={
            <Suspense fallback="Loading">
              <StudentWiseDetails />
            </Suspense>
          }
        ></Route>
        <Route path="library-activities">
          <Route path="lend-books"></Route>
          <Route path="return-reissue-books"></Route>
        </Route>
        <Route
          path="lost-book-details"
          element={
            <Suspense fallback="Loading">
              <RouteSetupAdd />
            </Suspense>
          }
        />
        <Route path="library-member">
          <Route path="staff"></Route>
          <Route path="student"></Route>
        </Route>
        <Route path="library-setup">
          <Route path="book-category" />
          <Route path="book-sub-category" />
          <Route path="book-issue-rule" />
          <Route path="fine-setup" />
        </Route>
        <Route path="library-book-report">
          <Route path="book-report" /> <Route path="book-transaction-report" />
          <Route path="library-day-log" /> <Route path="book-entry-report" />
        </Route>
        <Route path="library-payment-report">
          <Route path="library-fine-summary" />
          <Route path="linrary-fine-statement" />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div className="text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center">
            Page not found-{location.pathname.replace("/", " ")}
          </div>
        }
      />
    </Routes>
  );
}
