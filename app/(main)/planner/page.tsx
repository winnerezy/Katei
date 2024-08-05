import { BigCalendar } from "@/components/BigCalendar";
import { Header } from "@/components/Header";
import { ProfileImage } from "@/components/ProfileImage";

export default function Planner() {
  return (
    <section className="w-full min-h-screen p-4 space-y-4 flex flex-col">
      <Header />
      <ProfileImage />
      <h1 className="font-bold text-3xl">Planner</h1>
      <BigCalendar />
    </section>
  );
}
