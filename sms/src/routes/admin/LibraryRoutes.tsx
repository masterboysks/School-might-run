import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LibraryMemberStaffMain from '../../modules/admin/sidebar-activities/library/library-member/staff/main/page';
import LibraryRegisterStaff from '../../modules/admin/sidebar-activities/library/library-member/staff/register/page';
import BookBorrowHistoryStaff from '../../modules/admin/sidebar-activities/library/library-member/staff/staff/boook-borrow-history/page';
import LibraryEnrollRenewHistoryStaff from '../../modules/admin/sidebar-activities/library/library-member/staff/staff/enroll-renew/page';
import LibrarySingleStaffLayout from '../../modules/admin/sidebar-activities/library/library-member/staff/staff/layout';
import LibraryMemberStudentMain from '../../modules/admin/sidebar-activities/library/library-member/student/main/page';
import LibraryRegisterStudent from '../../modules/admin/sidebar-activities/library/library-member/student/register/page';
import BookBorrowHistory from '../../modules/admin/sidebar-activities/library/library-member/student/student/boook-borrow-history/page';
import LibraryEnrollRenewHistory from '../../modules/admin/sidebar-activities/library/library-member/student/student/enroll-renew/page';
import LibrarySingleStudentLayout from '../../modules/admin/sidebar-activities/library/library-member/student/student/layout';
const BookDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/book-details/page'
    )
);
const EditBookDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/edit-book-details/page'
    )
);
const EditShelfDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/edit-shelf-details/page'
    )
);
const LibraryGeneralDetailsAdd = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/register-new-book/general-details/page'
    )
);
const LayoutBookDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/register-new-book/layout'
    )
);
const LibrarySpecificDetailsAdd = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/register-new-book/specific-details/page'
    )
);
const LendBook = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-activities/lend-book/lend-book/page'
    )
);
const LendBookLend = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-activities/lend-book/lend/page'
    )
);
const ReturnReIssueBooks = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-activities/return-reissue-books/page'
    )
);
const LostBookMember = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/lost-book-details/lost-book-details-add/member/page'
    )
);
const LostBookOrganization = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/lost-book-details/lost-book-details-add/organization/page'
    )
);
const LostBookDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/lost-book-details/lost-book-details/page'
    )
);
const LibrarySlidebar = lazy(
  () => import('../../modules/admin/sidebar-activities/library/Slidebar')
);
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
          <Route
            path="register"
            element={
              <Suspense>
                <LayoutBookDetails />{' '}
              </Suspense>
            }
          >
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
          <Route
            path="edit-shelf-details"
            element={
              <Suspense>
                <EditShelfDetails />{' '}
              </Suspense>
            }
          />
          <Route
            path="edit-book-details"
            element={
              <Suspense>
                <EditBookDetails />{' '}
              </Suspense>
            }
          />
        </Route>
        <Route path="library-activities">
          <Route path="lend-book">
            <Route
              index
              element={
                <Suspense>
                  <LendBook />{' '}
                </Suspense>
              }
            />
            <Route
              path="lend"
              element={
                <Suspense>
                  <LendBookLend />{' '}
                </Suspense>
              }
            />
          </Route>
          <Route
            path="return-reissue-book"
            element={
              <Suspense>
                <ReturnReIssueBooks />{' '}
              </Suspense>
            }
          />
        </Route>
        <Route path="lost-book-details">
          <Route
            index
            element={
              <Suspense fallback="Loading">
                <LostBookDetails />
              </Suspense>
            }
          />
          <Route
            path="lost-book-organization"
            element={
              <Suspense>
                <LostBookOrganization />{' '}
              </Suspense>
            }
          />
          <Route
            path="lost-book-member"
            element={
              <Suspense>
                <LostBookMember />{' '}
              </Suspense>
            }
          />
        </Route>
        <Route path="library-member">
          <Route path="staff">
            <Route
              index
              element={
                <Suspense>
                  <LibraryMemberStaffMain />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense>
                  <LibraryRegisterStaff />
                </Suspense>
              }
            />
            <Route path=":staff" element={<LibrarySingleStaffLayout />}>
              <Route
                path="enroll-renew"
                element={<LibraryEnrollRenewHistoryStaff />}
              />
              <Route
                path="book-borrow-history"
                element={<BookBorrowHistoryStaff />}
              />
            </Route>
          </Route>
          <Route path="student">
            <Route
              index
              element={
                <Suspense>
                  <LibraryMemberStudentMain />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense>
                  <LibraryRegisterStudent />
                </Suspense>
              }
            />
            <Route path=":student" element={<LibrarySingleStudentLayout />}>
              <Route
                path="enroll-renew"
                element={<LibraryEnrollRenewHistory />}
              />
              <Route
                path="book-borrow-history"
                element={<BookBorrowHistory />}
              />
            </Route>
          </Route>
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
            Page not found-{location.pathname.replace('/', ' ')}
          </div>
        }
      />
    </Routes>
  );
}
