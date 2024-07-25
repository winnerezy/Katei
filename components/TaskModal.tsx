'use client'

import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea, DateInputField, DateInput } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { onOpen, onClose as close } from "../lib/redux/modalSlice";
import { createTask, getCurrentUserData, getTasks } from "@/lib/actions";
import { TaskSchema } from "@/lib/zodSchema";
import { fetchTasks } from "@/lib/redux/thunk";
import { AppDispatch } from "@/lib/redux/store";

export default function TaskModal({ username }: { username: string }) {

  const [user, setUser] = useState<User | null>(null)
  const {onOpenChange} = useDisclosure();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const titleRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null)

  const state = useSelector((state: any) => state.modal.isOpen)
  const dispatch = useDispatch<AppDispatch>()
  
  useEffect(()=> {
   async function fetchUserData(){
    const user = await getCurrentUserData({ username })
    setUser(user)
   }
   fetchUserData()
  }, [])

  const handleTitle = () => setTitle(titleRef.current?.value!)
  const handleDescription = () => setDescription(descriptionRef.current?.value!)

  const handleAdd = async () => {
    try {
      // TaskSchema.parse({ title, description })
      await createTask({ userid: user?.id!, title, description })
      dispatch(fetchTasks())
      dispatch(close())
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Modal isOpen={state} onOpenChange={onOpenChange} className="self-center">
        <ModalContent className="h-[300px] m-2">
          {(onClose: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">New Task</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-6 w-full outline-none">
                  <Input 
                  placeholder="Enter the title"
                  ref={titleRef}
                  onChange={handleTitle}
                  />
                  <Textarea 
                  placeholder="Enter the description" 
                  maxLength={300} 
                  ref={descriptionRef}
                  onChange={handleDescription}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="w-24 h-10 bg-transparent" onPress={() => dispatch(close())}>
                  Close
                </Button>
                <Button className="bg-[--bg] w-24 h-10" onPress={handleAdd}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
