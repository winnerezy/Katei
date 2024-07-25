import { Header } from "@/components/Header";
import { ProfileImage } from "@/components/ProfileImage";


export default function Flashcards() {
  return (
    <section className="w-full min-h-[100dvh] p-4 space-y-4 flex flex-col">
      <Header />
     <ProfileImage/>

      <h1 className="font-bold text-3xl">Flash Cards</h1>
    </section>
  );
}
