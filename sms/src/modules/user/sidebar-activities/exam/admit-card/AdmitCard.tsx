import React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
const routines = [
  {
    name: 'Preboard examination routine',
    days: 45,
    routine: [
      {
        date: 'kjfdjfds',
        name: 'Nepalu',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhdsjh',
      },
      {
        date: 'kjfdjfds',
        name: 'kldjfklj',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhfs',
      },
    ],
  },
  {
    name: 'Preboard examination routigfdshne',
    days: 45,
    routine: [
      {
        date: 'kjfdjfds',
        name: 'Nepalu',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhdsjh',
      },
      {
        date: 'kjfdjfds',
        name: 'kldjfklj',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhfs',
      },
    ],
  },
  {
    name: 'Preboard examination rouadgtine',
    days: 45,
    routine: [
      {
        date: 'kjfdjfds',
        name: 'Nepalu',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhdsjh',
      },
      {
        date: 'kjfdjfds',
        name: 'kldjfklj',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhfs',
      },
    ],
  },
  {
    name: 'Preboard examination ewrtgdfg',
    days: 45,
    routine: [
      {
        date: 'kjfdjfds',
        name: 'Nepalu',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhdsjh',
      },
      {
        date: 'kjfdjfds',
        name: 'kldjfklj',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhfs',
      },
    ],
  },
  {
    name: 'Preboard examinatio345rewn routine',
    days: 45,
    routine: [
      {
        date: 'kjfdjfds',
        name: 'Nepalu',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhdsjh',
      },
      {
        date: 'kjfdjfds',
        name: 'kldjfklj',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhfs',
      },
    ],
  },
  {
    name: 'Preboard examinatiagre543on routine',
    days: 45,
    routine: [
      {
        date: 'kjfdjfds',
        name: 'Nepalu',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhdsjh',
      },
      {
        date: 'kjfdjfds',
        name: 'kldjfklj',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhfs',
      },
    ],
  },
  {
    name: 'Preboard eaw32t4agxamination routine',
    days: 45,
    routine: [
      {
        date: 'kjfdjfds',
        name: 'Nepalu',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhdsjh',
      },
      {
        date: 'kjfdjfds',
        name: 'kldjfklj',
      },
      {
        date: 'kjfdjfds',
        name: 'jkhfs',
      },
    ],
  },
];
export default function ExamRoutine() {
  return (
    <>
      <div className="text-primary-grey-700 text-lg font-medium  ">
        Admit card
      </div>
      <div className="mt-11 lg:w-2/3 w-full">
        {routines.map((curr, i) => (
          <div key={curr.name} className="border p-3 rounded-md  mt-9">
            <div className="flex">
              <div className="text-red-500 h-5 w-5 -mt-1 mr-3">
                <BadgeIcon fontSize="inherit" />
              </div>
              <div className="">{curr.days} days ago</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium text-base ">{curr.name}</div>
              <button className=" rounded px-3 py-1.5 primary_btn">View</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
// const [isOpen, setIsOpen] = useState(false)
// const [routine, setRoutine] = useState("")
// const [routines, setRoutines] = useState('')
// const onClick=async(id)=>{
//   try {

//     const data=await Api....
//     setRoutine(data?.data)
//     setIsOpen(true)
//   } catch (error) {
//     // console.warn(error)
//   }

// }
