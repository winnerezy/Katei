"use client";

import { useDispatch, useSelector } from "react-redux";
import { TaskCard } from "./TaskCard";
import { useEffect } from "react";
import { fetchTasks } from "@/lib/redux/thunk";
import { AppDispatch } from "@/lib/redux/store";

export const TasksGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const tasks: Task[] = useSelector((state: any) => state.tasks.tasks);

  return (
    <div className="w-full flex flex-col gap-4">
      {tasks.slice(0, 3).map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
      <p className="text-sm text-end absolute bottom-4 right-4">
        {tasks.length !== 0 ? "See more..." : ""}
      </p>
    </div>
  );
};
