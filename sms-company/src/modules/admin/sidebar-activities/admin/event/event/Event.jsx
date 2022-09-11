import Breadnav from "../../../../../../components/common/Breadnav";
import Calendar from "./Calendar";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Event",
    href: "/admin/dashboard/admin/event-calender",
    current: true,
  },
];
function Event() {
  return (
    <div>
      <Breadnav pages={pages} />
      <Calendar />
    </div>
  );
}

export default Event;
