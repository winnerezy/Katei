'use client'

import { AppDispatch } from "@/lib/redux/store";
import { fetchAssignments } from "@/lib/redux/thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AssignmentCard } from "./AssignmentCard";
import EditModal from "./modals/EditModal";

export const AssignmentsGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const assignments: Assignment[] = useSelector(
    (state: any) => state.assignments.assignments
  );

  useEffect(() => {
    dispatch(fetchAssignments());
  }, []);

  const data = useSelector((state: any) => state.editModal.assignmentData)

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full place-items-center">
      {assignments?.map((assignment) => (
        <AssignmentCard {...assignment} key={assignment.id}/>
      ))}
      <EditModal { ...data } />
    </section>
  );
};
