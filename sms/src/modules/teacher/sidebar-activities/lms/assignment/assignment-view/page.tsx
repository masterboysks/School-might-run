import React from "react";
import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Details from "./Details";
import Table from "./Table";
const data = {
  title: "import ant question",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, excepturi. Facilis assumenda corrupti, est iste dignissimos consectetur. Optio nesciunt unde rerum tempore est quas ipsa laborum, impedit consequuntur autem aut.",
  assigned_date: "1/2/2023",
  total_points: 1,
  deadline: "1/3/2023",
  checked_no: "8000",
  submitted: "99999999990",
  not_submitted: "Sun kar dal jayegayea",
  assignment:
    "Write essay on AI with at least 1 billion words and do not use AI to generate essay",
  reference: "https://www.google.com",
};
const statusArray = [
  {
    id: "1",
    name: "Submmitted",
  },
  {
    id: "2",
    name: "Not-submmitted",
  },
  {
    id: "3",
    name: "Checked",
  },
];
const filtered_data = [
  {
    id: 5521332,
    name: "Ranjit Sherstha",
    roll_no: "99/98",
    status: 1,

    submitted_date: "11/12/2039",
    points: "0/100",
    assignment: "https://www.google.com",
  },
  {
    id: 5521332,
    name: "Shuvam dahal",
    roll_no: "98/98",
    status: 2,
    submitted_date: undefined,
    points: undefined,
    assignment: "https://www.google.com",
  },
];

export default function AssignmentView() {
  const { name, id } = useParams();
  const pages = [
    { name: "Lms" },
    {
      name: "Assignment",
      href: "/teacher/dashboard/lms/assignment/",
    },
    {
      name,
      href: `/teacher/dashboard/lms/assignment/${name}`,
    },
    {
      name: data.title,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />
      <div className="font-medium text-lg text-primary-grey-700 mt-6">
        {data.title}
      </div>
      <div className="mt-4">DESCRIPTION:</div>
      <div className="my-2">{data.description}</div>
      <Details data={data} />
      <Table data={filtered_data} status={statusArray} />
    </>
  );
}
