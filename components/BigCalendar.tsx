'use client'

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
export const BigCalendar = () => {
  return (
   <section className="w-full min-h-screen">
     <Calendar localizer={localizer} startAccessor="start" endAccessor="end" showMultiDayTimes defaultDate={new Date()} step={60} style={{ height: "100%" }} />
   </section>
  );
};
