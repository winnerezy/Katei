import { Header } from "@/components/Header";
import { ProfileImage } from "@/components/ProfileImage";

export default function Planner() {
  return (
    <section className="min-h-screen p-4 space-y-4 flex flex-col">
      <Header />
      <ProfileImage />
    </section>
  );
}
