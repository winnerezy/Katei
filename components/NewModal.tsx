"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  useDisclosure,
  Textarea,
  Input,
  Select,
  SelectItem,
  DatePicker,
} from "@nextui-org/react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { onOpen, onClose as close } from "../lib/redux/modalSlice";
import { createItem, getCurrentUserData } from "@/lib/actions";
import { fetchAssignments, fetchTasks } from "@/lib/redux/thunk";
import { AppDispatch } from "@/lib/redux/store";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { Box } from "@mui/material";

export default function NewModal({ username }: { username: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [type, setType] = useState<string>("task");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState<Date>(new Date());
  const state = useSelector((state: any) => state.modal.isOpen);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchUserData() {
      const user = await getCurrentUserData({ username });
      setUser(user);
    }
    fetchUserData();
  }, [username]);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAdd = async () => {
    if (!user) {
      console.error("User data is not available");
      return;
    }
    try {
      await createItem({
        userid: user.id,
        title,
        description,
        type,
        due: date,
      });
      dispatch(fetchTasks());
      dispatch(fetchAssignments());

      setTitle("");
      setDescription("");
      dispatch(close());
    } catch (error: any) {
      console.error("Error creating item:", error.message);
    }
  };

  const types = [{ type: "Task" }, { type: "Assignment" }];

  const handleType = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
      <Modal open={state} onClose={() => dispatch(close())} className="md:ml-[250px]">
          <Box className="max-w-[1000px] w-full h-[500px] mx-2 p-6 flex flex-col bg-white rounded-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-8">
            <div className="flex gap-4 w-full items-center">
              <p className="text-xl font-bold">New</p>
              <Select
                  items={types}
                  label="Create Document"
                  placeholder="Select a type"
                  className="w-60"
                  defaultSelectedKeys={["Task"]}
                  onChange={handleType}
                >
                  {types.map((type) => (
                    <SelectItem key={type.type}>{type.type}</SelectItem>
                  ))}
                </Select>
            </div>
            <section className="flex flex-col w-full gap-4">
              <div className="flex flex-col gap-6 w-full outline-none">
                <Input placeholder="Enter the title" onChange={handleTitle} />
                <Textarea
                  placeholder="Enter the description"
                  maxLength={300}
                  onChange={handleDescription}
                />
                <DatePicker
                    label="Due: "
                    className="max-w-xs"
                    defaultValue={parseAbsoluteToLocal(new Date().toISOString())}
                    labelPlacement="outside"
                    onChange={(e) => setDate(e.toDate())}
                  />
              </div>
            </section>
            <div className="absolute right-6 bottom-6">
              <Button
                className="w-24 h-10 bg-transparent"
                onClick={() => dispatch(close())}
              >
                Close
              </Button>
              <Button className="bg-[--bg] w-24 h-10" onClick={handleAdd}>
                Add
              </Button>
            </div>
          </Box>
      </Modal>
  );
}
