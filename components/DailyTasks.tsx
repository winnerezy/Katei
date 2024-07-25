import { TaskCard } from "./TaskCard"
import { Segment } from "./Segment"
import { AddButton } from "./AddButton"
import TaskModal from "./TaskModal"
import { getCurrentUser } from "@/lib/actions"
import { TasksGrid } from "./TasksGrid"

export const DailyTasks = async () => {

  const user = await getCurrentUser()
  
  return (
    <Segment className="relative size-[300px] w-full flex flex-col p-4 gap-6">
        <h3 className="text-2xl font-bold tracking-wide w-full text-start">Today's Tasks</h3>
        <AddButton/>
        <TasksGrid/>
        {/* <p className="text-xs w-full text-end absolute bottom-2 right-2">{ tasks.length !== 0 ? "See more..." : ""}</p> */}
        <TaskModal username={user?.name!}/>
    </Segment>
  )
}
