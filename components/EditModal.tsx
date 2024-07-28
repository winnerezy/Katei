"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  Textarea,
  Input,
  Select,
  SelectItem,
  DatePicker,
} from "@nextui-org/react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { editItem, getAssignment } from "@/lib/actions";
import { fetchAssignments, fetchTasks } from "@/lib/redux/thunk";
import { AppDispatch } from "@/lib/redux/store";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { Box } from "@mui/material";
import { closeEditModal } from "@/lib/redux/editModalSlice";
import { CircularProgress } from "@nextui-org/progress";

export default function EditModal({
  id,
  title: assignmentTitle,
  description: assignmentsDescription,
  due,
}: {
  id: string;
  title: string;
  description: string | null;
  due: Date;
}) {
  const state = useSelector((state: any) => state.editModal.isOpen);
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState<string>(assignmentTitle || "");
  const [description, setDescription] = useState<string>(assignmentsDescription || "");

  const initialDate = due ? new Date(due) : new Date();
  const [date, setDate] = useState<Date>(initialDate);
  const [type, setType] = useState<string>("Assignment");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (assignmentTitle) {
      setTitle(assignmentTitle);
    }
    if(assignmentsDescription){
      setDescription(assignmentsDescription);
    }
    if (due) {
      setDate(new Date(due));
    }
  }, [assignmentTitle, due, assignmentsDescription]);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleEdit = async () => {
    setIsLoading(true);
    try {
      await editItem(id, title, description, date);
      dispatch(fetchTasks());
      dispatch(fetchAssignments());

      setTitle("");
      setDescription("");
      dispatch(closeEditModal());
    } catch (error: any) {
      console.error("Error creating item:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // const types = [{ type: "Task" }, { type: "Assignment" }];

  // const handleType = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setType(e.target.value);
  // };

  return (
    <Modal
      open={state}
      onClose={() => dispatch(closeEditModal())}
      className="md:ml-[100px] flex w-full items-center justify-center"
    >
      <Box className="max-w-[1000px] w-full h-[500px] mx-2 p-6 flex flex-col bg-white rounded-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-8">
        <div className="flex gap-4 w-full items-center">
          <p className="text-xl font-bold">Edit Assignment</p>
          {/* <Select
            items={types}
            label="Create Document"
            placeholder="Select a type"
            className="w-60"
            value={"Assignment"}
            onChange={handleType}
          >
            {types.map((type) => (
              <SelectItem key={type.type}>{type.type}</SelectItem>
            ))}
          </Select> */}
        </div>
        <section className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-6 w-full outline-none">
            <Input
              placeholder="Enter the title"
              defaultValue={assignmentTitle}
              onChange={handleTitle}
            />
            <Textarea
              placeholder="Enter the description"
              maxLength={300}
              onChange={handleDescription}
            />
            <DatePicker
              label="Due: "
              className="max-w-xs"
              defaultValue={parseAbsoluteToLocal(date.toISOString())}
              labelPlacement="outside"
              onChange={(e) => setDate(e.toDate())}
            />
          </div>
        </section>
        <div className="absolute right-6 bottom-6 flex gap-4">
          <Button
            className="w-24 h-10 bg-transparent"
            onClick={() => dispatch(closeEditModal())}
          >
            Close
          </Button>
          <Button
            className="bg-[--bg] w-24 h-10 flex items-center justify-center text-center"
            onClick={handleEdit}
          >
            {isLoading ? <CircularProgress size="sm" /> : <p>Edit</p>}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
