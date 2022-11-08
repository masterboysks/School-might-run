import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import Arrow from '@mui/icons-material/ArrowForwardIos';

const activitiesLinks = [
  {
    name: 'Lend books',
    path: '/admin/dashboard/library/library-activities/lend-book',
  },
  {
    name: 'return  / Reissue books',
    path: '/admin/dashboard/library/library-activities/return-reissue-book',
  },
];
const memberLinks = [
  {
    name: 'Student',
    path: '/admin/dashboard/library/library-member/student',
  },
  {
    name: 'Staff',
    path: '/admin/dashboard/library/library-member/staff',
  },
];
const setupLinks = [
  {
    name: 'Book category',
    path: '/admin/dashboard/library/library-setup/book-category',
  },
  {
    name: 'Book sub-category',
    path: '/admin/dashboard/library/library-setup/book-sub-category',
  },
  {
    name: 'Book issue rule',
    path: '/admin/dashboard/library/library-setup/book-issue-rule',
  },
  {
    name: 'Fine setup',
    path: '/admin/dashboard/library/library-setup/fine-setup',
  },
];
const bookReportLinks = [
  {
    name: 'Book report',
    path: '/admin/dashboard/library/library-book-report/book-report',
  },
  {
    name: 'Book transaction report',
    path: '/admin/dashboard/library/library-book-report/book-transaction-report',
  },
  {
    name: 'Library day log',
    path: '/admin/dashboard/library/library-book-report/library-day-log',
  },
  {
    name: 'Book entry report',
    path: '/admin/dashboard/library/library-book-report/book-entry-report',
  },
];
const paymentReportLinks = [
  {
    name: 'Library fine summary',
    path: '/admin/dashboard/library/library-payment-report/library-fine-summary',
  },
  {
    name: 'Library fine statement',
    path: '/admin/dashboard/library/library-payment-report/library-fine-statement',
  },
];

const LibrarySlidebar = () => {
  // const [dropdownSetupActive, setDropdownSetupActive] = useState(true);
  const [setup, setSetup] = useState(false);
  const [activities, setActivities] = useState(false);
  const [member, setMember] = useState(false);
  const [bookReport, setBookReport] = useState(false);
  const [paymentReport, setPaymentReport] = useState(false);
  const location = useLocation().pathname;
  // useEffect(() => {
  //   location.includes('/admin/dashboard/exam/exam-setup')
  //     ? setSetup(true)
  //     : setSetup(false);
  // }, [location]);

  let nav;
  const sidebar = () => {
    nav = document.getElementById('sidebar')?.classList;
    nav.contains('hidden') ? nav.remove('hidden') : nav.add('hidden');
    slidebar();
  };

  const slidebar = () => {
    nav = document.getElementById('sidebar')?.classList;
    let overlay = document.getElementById('overlay')?.classList;
    const slidebar = document.getElementById('slidebar')?.classList;

    slidebar &&
      (slidebar.contains('hidden') && !nav.contains('hidden')
        ? slidebar.remove('hidden')
        : slidebar.add('hidden'));
    overlay &&
      (!slidebar?.contains('hidden')
        ? overlay.remove('hidden')
        : overlay.add('hidden'));
  };
  return (
    <>
      <div
        className="min-w-[216px]  mt-[2px] box-border text-primary-grey-600 border-r-[1px] z-[99] border-r-primary-grey-100-grey-200 bg-primary-grey-100 fixed top-16 md:static   ml-[72px] md:ml-0 h-[94vh] pb-20 overflow-y-auto hidden lg:inline "
        id="slidebar"
      >
        <div className="w-full">
          <ul className="pt-9 mx-2">
            <Link to="/admin/dashboard/library/book-details" onClick={sidebar}>
              <li
                className={` flex p-1 mt-2 mb-3  pr-3     cursor-pointer rounded ${
                  location.includes('/admin/dashboard/library/book-details')
                    ? ' bg-primary-grey-200  text-primary-grey-700 '
                    : ' hover:bg-primary-grey-200 text-primary-grey-600 '
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="inherit" />
                </div>
                Book details
              </li>
            </Link>
            <li
              onClick={() => {
                setActivities((c) => !c);
              }}
              className={`flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
            ${
              location.includes('/admin/dashboard/library/library-activities')
                ? 'text-primary-grey-700'
                : 'text-primary-grey-600'
            } 
                 ${
                   location.includes(
                     '/admin/dashboard/library/library-activities'
                   ) && !activities
                     ? 'bg-primary-grey-200 '
                     : 'text-primary-grey-600'
                 } text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  activities ? 'rotate-90' : ''
                }  `}
              >
                <Arrow fontSize="inherit" />
              </div>
              <div className=" text-sm">Library activities</div>
            </li>
            <ul
              className={`${
                activities ? '' : 'hidden'
              } transition duration-700 ease-in`}
              id="dropdown"
            >
              {activitiesLinks.map((curr) => {
                return (
                  <Link to={curr.path} key={curr.name} onClick={sidebar}>
                    <li
                      className={`pl-6  pr-3    mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
                        location.includes(curr.path)
                          ? 'bg-primary-grey-200 text-primary-grey-700'
                          : 'hover:bg-primary-grey-200 text-primary-grey-600'
                      }`}
                    >
                      {curr.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <Link
              to="/admin/dashboard/library/lost-book-details"
              onClick={sidebar}
            >
              <li
                className={` flex p-1 mt-2 mb-3  pr-3     cursor-pointer rounded ${
                  location.includes(
                    '/admin/dashboard/library/lost-book-details'
                  )
                    ? ' bg-primary-grey-200  text-primary-grey-700 '
                    : ' hover:bg-primary-grey-200 text-primary-grey-600 '
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="inherit" />
                </div>
                Lost book details
              </li>
            </Link>
            <li
              onClick={() => {
                setMember((c) => !c);
              }}
              className={`flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
            ${
              location.includes('/admin/dashboard/library/library-member')
                ? 'text-primary-grey-700'
                : 'text-primary-grey-600'
            } 
                 ${
                   location.includes(
                     '/admin/dashboard/library/library-member'
                   ) && !member
                     ? 'bg-primary-grey-200 '
                     : 'text-primary-grey-600'
                 } text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  member ? 'rotate-90' : ''
                }  `}
              >
                <Arrow fontSize="inherit" />
              </div>
              <div className=" text-sm">Library member</div>
            </li>
            <ul
              className={`${
                member ? '' : 'hidden'
              } transition duration-700 ease-in`}
              id="dropdown"
            >
              {memberLinks.map((curr) => {
                return (
                  <Link to={curr.path} key={curr.name} onClick={sidebar}>
                    <li
                      className={`pl-6  pr-3    mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
                        location.includes(curr.path)
                          ? 'bg-primary-grey-200 text-primary-grey-700'
                          : 'hover:bg-primary-grey-200 text-primary-grey-600'
                      }`}
                    >
                      {curr.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <li
              onClick={() => {
                setSetup((c) => !c);
              }}
              className={`flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
            ${
              location.includes('/admin/dashboard/library/library-setup')
                ? 'text-primary-grey-700'
                : 'text-primary-grey-600'
            } 
                 ${
                   location.includes(
                     '/admin/dashboard/library/library-setup'
                   ) && !setup
                     ? 'bg-primary-grey-200 '
                     : 'text-primary-grey-600'
                 } text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  setup ? 'rotate-90' : ''
                }  `}
              >
                <Arrow fontSize="inherit" />
              </div>
              <div className=" text-sm">Library setup</div>
            </li>
            <ul
              className={`${
                setup ? '' : 'hidden'
              } transition duration-700 ease-in`}
              id="dropdown-setup"
            >
              {setupLinks.map((curr) => {
                return (
                  <Link to={curr.path} key={curr.name} onClick={sidebar}>
                    <li
                      className={`pl-6  pr-3    mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
                        location.includes(curr.path)
                          ? 'bg-primary-grey-200 text-primary-grey-700'
                          : 'hover:bg-primary-grey-200 text-primary-grey-600'
                      }`}
                    >
                      {curr.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <li
              onClick={() => {
                setBookReport((c) => !c);
              }}
              className={`flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
            ${
              location.includes('/admin/dashboard/library/library-book-report')
                ? 'text-primary-grey-700'
                : 'text-primary-grey-600'
            } 
                 ${
                   location.includes(
                     '/admin/dashboard/library/library-book-report'
                   ) && !bookReport
                     ? 'bg-primary-grey-200 '
                     : 'text-primary-grey-600'
                 } text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  bookReport ? 'rotate-90' : ''
                }  `}
              >
                <Arrow fontSize="inherit" />
              </div>
              <div className=" text-sm">Library's book report</div>
            </li>
            <ul
              className={`${
                bookReport ? '' : 'hidden'
              } transition duration-700 ease-in`}
              id="dropdown"
            >
              {bookReportLinks.map((curr) => {
                return (
                  <Link to={curr.path} key={curr.name} onClick={sidebar}>
                    <li
                      className={`pl-6  pr-3    mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
                        location.includes(curr.path)
                          ? 'bg-primary-grey-200 text-primary-grey-700'
                          : 'hover:bg-primary-grey-200 text-primary-grey-600'
                      }`}
                    >
                      {curr.name}
                    </li>
                  </Link>
                );
              })}
            </ul>{' '}
            <li
              onClick={() => {
                setPaymentReport((c) => !c);
              }}
              className={`flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
            ${
              location.includes(
                '/admin/dashboard/library/library-payment-report'
              )
                ? 'text-primary-grey-700'
                : 'text-primary-grey-600'
            } 
                 ${
                   location.includes(
                     '/admin/dashboard/library/library-payment-report'
                   ) && !paymentReport
                     ? 'bg-primary-grey-200 '
                     : 'text-primary-grey-600'
                 } text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  paymentReport ? 'rotate-90' : ''
                }  `}
              >
                <Arrow fontSize="inherit" />
              </div>
              <div className=" text-sm">Library paymentReport</div>
            </li>
            <ul
              className={`${
                paymentReport ? '' : 'hidden'
              } transition duration-700 ease-in`}
              id="dropdown"
            >
              {paymentReportLinks.map((curr) => {
                return (
                  <Link to={curr.path} key={curr.name} onClick={sidebar}>
                    <li
                      className={`pl-6  pr-3    mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
                        location.includes(curr.path)
                          ? 'bg-primary-grey-200 text-primary-grey-700'
                          : 'hover:bg-primary-grey-200 text-primary-grey-600'
                      }`}
                    >
                      {curr.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </ul>
        </div>
      </div>
      <div className=" sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1">
        <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
          <div className="-z-10 sm:mt-9 w-11/12 mx-auto text-sm">
            <Outlet />
          </div>
        </div>
      </div>
      <div
        className="lg:hidden overscroll-none opacity-95 fixed top-0  z-[99999] left-[288px] hidden w-full h-screen bg-transparent"
        id="overlay"
        onClick={sidebar}
      />
    </>
  );
};

export default LibrarySlidebar;
