'use client'

import { AppDispatch } from "@/lib/redux/store";
import { fetchAssignments } from "@/lib/redux/thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AssignmentCard } from "./AssignmentCard";

export const AssignmentsGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const assignments: Assignment[] = useSelector(
    (state: any) => state.assignments.assignments
  );

  useEffect(() => {
    dispatch(fetchAssignments());
  }, []);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full place-items-center">
      {assignments?.map((assignment) => (
        <AssignmentCard {...assignment} />
      ))}
    </section>
  );
};
