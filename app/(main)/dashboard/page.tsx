import { Header } from "@/components/Header";
import { Segment } from "@/components/Segment";
import { Calendar } from "@nextui-org/calendar";

export default function Dashboard() {
  return (
    <section className="w-full min-h-screen p-4">
      <Header/>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <Segment className="w-[400px] flex flex-col">
        <Calendar/>
      </Segment>
    </section>
  )
}
