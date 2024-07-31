"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Segment } from "./Segment";

export const Calendar = () => {
  return (
    <Segment className="size-[300px] md:max-w-[300px] md:h-[300px] w-fullshadow-md justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Segment>
  );
};
