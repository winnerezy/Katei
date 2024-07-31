import { Segment } from "./Segment"
import { getCurrentUser } from "@/lib/actions"
import { TasksGrid } from "./TasksGrid"
export const DailyTasks = async () => {

  const user = await getCurrentUser()
  
  return (
    <Segment className="relative size-[300px] md:max-w-[300px] md:h-[300px] w-full flex flex-col p-4 gap-6 shadow-md">
        <h3 className="text-2xl font-bold tracking-wide w-full text-start">Today's Tasks</h3>
        <TasksGrid/>
    </Segment>
  )
}
