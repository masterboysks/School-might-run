import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BookDetails from "../../modules/admin/sidebar-activities/library/book-details/book-details/page";
import LibraryGeneralDetailsAdd from "../../modules/admin/sidebar-activities/library/book-details/register-new-book/general-details/page";
import LibrarySpecificDetailsAdd from "../../modules/admin/sidebar-activities/library/book-details/register-new-book/specific-details/page";
import LibrarySlidebar from "../../modules/admin/sidebar-activities/library/Slidebar";
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
        <Route path="book-details">
          <Route
            index
            element={
              <Suspense fallback="Loading">
                <BookDetails />
              </Suspense>
            }
          />
          <Route path="register">
            <Route
              path="general"
              element={
                <Suspense>
                  <LibraryGeneralDetailsAdd />
                </Suspense>
              }
            />
            <Route
              path="specific"
              element={
                <Suspense>
                  <LibrarySpecificDetailsAdd />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path="library-activities">
          <Route path="lend-books"></Route>
          <Route path="return-reissue-books"></Route>
        </Route>
        <Route
          path="lost-book-details"
          element={<Suspense fallback="Loading">fsa</Suspense>}
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
