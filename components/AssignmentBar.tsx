"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AssignmentCard } from "./AssignmentCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssignments } from "@/lib/redux/thunk";
import { AppDispatch } from "@/lib/redux/store";

export const AssignmentBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const assignments: Assignment[] = useSelector((state: any) => state.assignments.assignments);

  useEffect(() => {
    dispatch(fetchAssignments());
  }, []);
  return (
    <Swiper spaceBetween={30} slidesPerView={2} className="w-full space-x-4">
      {assignments?.map((assignment) => (
        <SwiperSlide>
          <AssignmentCard {...assignment} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
