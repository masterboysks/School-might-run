import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const RouteSetupAdd = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/route-setup/route-setup-add/page"
    )
);
const RouteSetupEdit = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/route-setup/route-setup-edit/page"
    )
);
const RouteSetup = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/route-setup/route-setup/page"
    )
);
const TransportationSlidebar = lazy(
  () => import("../../modules/admin/sidebar-activities/transportation/Slidebar")
);
const StudentWiseDetails = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/student-wise-details/page"
    )
);
const VechicleRouteSetupAdd = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/vehicle-route-setup/vehicle-route-setup-add/page"
    )
);
const VehicleRouteSetupEdit = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/vehicle-route-setup/vehicle-route-setup-edit/page"
    )
);
const VehicleRouteSetup = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/vehicle-route-setup/vehicle-route-setup/page"
    )
);
const VehicleSetupAdd = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/vehicle-setup/vehicle-setup-add/page"
    )
);
const VechicleSetupEdit = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/vehicle-setup/vehicle-setup-edit/page"
    )
);
const VehicleSetup = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/transportation/vehicle-setup/vehicle-setup/page"
    )
);
export default function TransportationRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <TransportationSlidebar></TransportationSlidebar>
          </Suspense>
        }
      >
        <Route
          path="student-wise-details"
          element={
            <Suspense fallback="Loading">
              <StudentWiseDetails />
            </Suspense>
          }
        ></Route>
        <Route
          path="route-setup"
          element={
            <Suspense fallback="Loading">
              <RouteSetup />
            </Suspense>
          }
        ></Route>
        <Route
          path="route-setup/add"
          element={
            <Suspense fallback="Loading">
              <RouteSetupAdd />
            </Suspense>
          }
        ></Route>
        <Route
          path="route-setup/:id/edit"
          element={
            <Suspense fallback="Loading">
              <RouteSetupEdit />
            </Suspense>
          }
        ></Route>
        <Route
          path="vehicle-setup"
          element={
            <Suspense fallback="Loading">
              <VehicleSetup />
            </Suspense>
          }
        ></Route>
        <Route
          path="vehicle-setup/add"
          element={
            <Suspense fallback="Loading">
              <VehicleSetupAdd />
            </Suspense>
          }
        ></Route>
        <Route
          path="vehicle-setup/:id/edit"
          element={
            <Suspense fallback="Loading">
              <VechicleSetupEdit />
            </Suspense>
          }
        ></Route>
        <Route
          path="vehicle-route-setup"
          element={
            <Suspense fallback="Loading">
              <VehicleRouteSetup />
            </Suspense>
          }
        ></Route>
        <Route
          path="vehicle-route-setup/add"
          element={
            <Suspense fallback="Loading">
              <VechicleRouteSetupAdd />
            </Suspense>
          }
        ></Route>
        <Route
          path="vehicle-route-setup/:id/edit"
          element={
            <Suspense fallback="Loading">
              <VehicleRouteSetupEdit />
            </Suspense>
          }
        ></Route>
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
