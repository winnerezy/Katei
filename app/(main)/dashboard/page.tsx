import { AssignmentBar } from "@/components/AssignmentBar";
import { Chart } from "@/components/Chart";
import { DailyTasks } from "@/components/DailyTasks";
import { Header } from "@/components/Header";
import { Calendar } from "@nextui-org/calendar";
import { getCurrentUser } from "@/lib/actions";
import { ProfileImage } from "@/components/ProfileImage";

export default async function Dashboard() {

  return (
    <section className="w-full min-h-screen p-4 space-y-4 flex flex-col">
      <Header/>
      <ProfileImage/>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <section className="self-center max-w-[550px] lg:max-w-[800px] xl:max-w-[1000px] w-full">
        <AssignmentBar/>
      </section>
      <div className="self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px] flex-grow w-full h-max items-center justify-center gap-4">       
        <DailyTasks/>
        <Chart/>
        <Calendar className="md:w-[300px] w-full flex items-center justify-center"/>
      </div>
    </section>
  )
}
