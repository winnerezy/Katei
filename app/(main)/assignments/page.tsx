import { AddButton } from "@/components/AddButton";
import { AssignmentsGrid } from "@/components/AssignmentsGrid";
import { Header } from "@/components/Header";
import { ProfileImage } from "@/components/ProfileImage";
import { getCurrentUser } from "@/lib/actions";

export default async function Assignments() {

  const user = await getCurrentUser()
  return (
    <section className="min-h-screen p-4 space-y-4 flex flex-col">
      <Header />
      <ProfileImage />
      <h1 className="font-bold text-3xl">Assignments</h1>
      <AddButton/>
      <AssignmentsGrid />
    </section>
  );
}
