import { Fragment, useState } from 'react';
import Arrow from '@mui/icons-material/ArrowForwardIos';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  Bars3BottomLeftIcon,
  CalendarIcon,
  HomeIcon,
  UsersIcon,
  BanknotesIcon,
  DocumentCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link, Outlet, useLocation } from 'react-router-dom';
import one from '../welcome/three.jpg';
import React from 'react';
let navigation, dropnavigation;

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [examData, setExamData] = useState(false);
  const [feeData, setFeeData] = useState(false);
  const location = useLocation().pathname;

  location.includes('/parent/dashboard') &&
    (navigation = [
      {
        name: 'Dashboard',
        href: '/parent/dashboard/dashboard',
        icon: HomeIcon,
      },
      {
        name: 'Attendance',
        href: '/parent/dashboard/attendance',
        icon: CalendarIcon,
      },
      {
        name: 'Teacher details',
        href: '/parent/dashboard/teacher-details',
        icon: UsersIcon,
      },
    ]) &&
    (dropnavigation = [
      {
        name: 'Exam',
        open: examData,
        close: setExamData,
        icon: DocumentCheckIcon,
        href: '/parent/dashboard/exam',
        links: [
          {
            name: 'Exam routine',
            link: '/parent/dashboard/exam/exam-routine',
          },
          {
            name: 'Admit card',
            link: '/parent/dashboard/exam/admit-card',
          },
          {
            name: 'Report card',
            link: '/parent/dashboard/exam/report-card',
          },
        ],
      },
      {
        name: 'Fee',
        open: feeData,
        close: setFeeData,
        icon: BanknotesIcon,
        href: '/parent/dashboard/fee',
        links: [
          {
            name: 'Logsheet',
            link: '/parent/dashboard/fee/logsheet',
          },
          {
            name: 'Fee invoice',
            link: '/parent/dashboard/fee/fee-invoice',
          },
          {
            name: 'Reciept',
            link: '/parent/dashboard/fee/reciept',
          },
          {
            name: 'Balance sheet',
            link: '/parent/dashboard/fee/balance-sheet',
          },
        ],
      },
    ]);
  location.includes('/student/dashboard') &&
    (navigation = [
      {
        name: 'Dashboard',
        href: '/student/dashboard/dashboard',
        icon: HomeIcon,
      },
      {
        name: 'Attendance',
        href: '/student/dashboard/attendance',
        icon: CalendarIcon,
      },
      {
        name: 'Teacher details',
        href: '/student/dashboard/teacher-details',
        icon: UsersIcon,
      },
    ]) &&
    (dropnavigation = [
      {
        name: 'Exam',
        open: examData,
        close: setExamData,
        href: '/student/dashboard/exam',
        icon: DocumentCheckIcon,
        links: [
          {
            name: 'Exam routine',
            link: '/student/dashboard/exam/exam-routine',
          },
          {
            name: 'Admit card',
            link: '/student/dashboard/exam/admit-card',
          },
          {
            name: 'Report card',
            link: '/student/dashboard/exam/report-card',
          },
        ],
      },
      {
        name: 'Fee',
        open: feeData,
        close: setFeeData,
        href: '/student/dashboard/fee',
        icon: BanknotesIcon,
        links: [
          {
            name: 'Logsheet',
            link: '/student/dashboard/fee/logsheet',
          },
          {
            name: 'Fee invoice',
            link: '/student/dashboard/fee/fee-invoice',
          },
          {
            name: 'Reciept',
            link: '/student/dashboard/fee/reciept',
          },
          {
            name: 'Balance sheet',
            link: '/student/dashboard/fee/balance-sheet',
          },
        ],
      },
    ]);
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-primary-grey-100 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10  items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-grey-200"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    {location.includes('/parent/dashboard') && (
                      <div className="px-2">
                        <div className="text-primary-grey-700 mx-1 text-sm my-3">
                          ACCOUNT
                        </div>
                        <div className=" bg-white rounded  px-4 py-2 ">
                          <div className="flex space-x-4">
                            <div className="w-10 h-10 rounded-full   overflow-hidden object-cover ">
                              <img src={one} alt="hjkhf" />
                            </div>
                            <div className="">
                              <div className=" font-medium text-primary-grey-700">
                                Shikha Bahari
                              </div>
                              <div className="text-primary-grey-600">
                                Class 7-B ID:123456
                              </div>
                            </div>
                          </div>
                          <button className=" text-red-600  bg-primary-grey-200 rounded w-full p-1 my-2 text-center ">
                            Switch account
                          </button>
                        </div>
                      </div>
                    )}
                    <nav className="space-y-1 px-2">
                      <div className="text-primary-grey-700 mx-1 text-sm my-3">
                        NAVIGATION
                      </div>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            location.includes(item.href)
                              ? 'bg-primary-grey-200 text-primary-grey-700'
                              : 'text-primary-grey-600 hover:bg-primary-grey-200 ',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              location.includes(item.href)
                                ? 'text-gray-500'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                      {dropnavigation.map((item) => (
                        <Fragment key={item.name}>
                          <a
                            onClick={() => {
                              item.close((a) => !a);
                            }}
                            className={classNames(
                              !item.open && location.includes(item.href)
                                ? 'bg-primary-grey-200 text-primary-grey-700'
                                : 'text-primary-grey-600 hover:bg-primary-grey-200 ',
                              'group flex items-center px-2 py-2  text-base font-medium rounded-md'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                !item.open && location.includes(item.href)
                                  ? 'text-gray-500'
                                  : 'text-gray-400 group-hover:text-gray-500',
                                'mr-4 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            <div className="flex w-full justify-between">
                              <div className="">{item.name}</div>
                              <div
                                id="arrow"
                                className={`devList text-gray-500  transition duration-100 ease-in text-sm ${
                                  item.open ? 'rotate-90' : ''
                                }  `}
                              >
                                <Arrow fontSize="inherit" />
                              </div>
                            </div>
                          </a>
                          {item.open ? (
                            <ul>
                              {item.links.map((curr) => (
                                <Link to={curr.link} key={curr.name}>
                                  <li
                                    className={`pl-6  pr-3 font-medium text-base   mx-2 mt-2 mb-3 rounded py-[3px]  ${
                                      location.includes(curr.path)
                                        ? 'bg-primary-grey-200 text-primary-grey-700'
                                        : 'hover:bg-primary-grey-200 text-primary-grey-600'
                                    }`}
                                  >
                                    {curr.name}
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          ) : null}
                        </Fragment>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-primary-grey-100 pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              {location.includes('/parent/dashboard') && (
                <div className="px-2">
                  <div className="text-primary-grey-700 mx-1 text-sm my-3">
                    ACCOUNT
                  </div>
                  <div className=" bg-white rounded  px-4 py-2 ">
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 rounded-full   overflow-hidden object-cover ">
                        <img src={one} alt="hjkhf" />
                      </div>
                      <div className="">
                        <div className=" font-medium text-primary-grey-700">
                          Shikha Bahari
                        </div>
                        <div className="text-primary-grey-600">
                          Class 7-B ID:123456
                        </div>
                      </div>
                    </div>
                    <button className=" text-red-600  bg-primary-grey-200 rounded w-full p-1 my-2 text-center ">
                      Switch account
                    </button>
                  </div>
                </div>
              )}
              <nav className="flex-1 space-y-1 px-2 pb-4">
                <div className="text-primary-grey-700 mx-1 text-sm my-3">
                  NAVIGATION
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.includes(item.href)
                        ? 'bg-primary-grey-200 text-primary-grey-700'
                        : 'text-primary-grey-600 hover:bg-primary-grey-200 ',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        location.includes(item.href)
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-4 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
                {dropnavigation.map((item) => (
                  <Fragment key={item.name}>
                    <a
                      onClick={() => {
                        item.close((a) => !a);
                      }}
                      className={classNames(
                        !item.open && location.includes(item.href)
                          ? 'bg-primary-grey-200 text-primary-grey-700'
                          : 'text-primary-grey-600 hover:bg-primary-grey-200 ',
                        'group flex items-center px-2 py-2  text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          !item.open && location.includes(item.href)
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      <div className="flex w-full justify-between">
                        <div className="">{item.name}</div>
                        <div
                          id="arrow"
                          className={`devList text-gray-500  transition duration-100 ease-in text-sm ${
                            item.open ? 'rotate-90' : ''
                          }  `}
                        >
                          <Arrow fontSize="inherit" />
                        </div>
                      </div>
                    </a>
                    {item.open ? (
                      <ul>
                        {item.links.map((curr) => (
                          <Link to={curr.link} key={curr.name}>
                            <li
                              className={`pl-6  pr-3 font-medium text-base   mx-2 mt-2 mb-3 rounded py-[3px]  ${
                                location.includes(curr.link)
                                  ? 'bg-primary-grey-200 text-primary-grey-700'
                                  : 'hover:bg-primary-grey-200 text-primary-grey-600'
                              }`}
                            >
                              {curr.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    ) : null}
                  </Fragment>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1" />
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="ml-2 text-primary-grey-700 pr-1">
                        Shuvam Sherstha
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
