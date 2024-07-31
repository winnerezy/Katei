import { AddDeck } from "@/components/AddDeck";
import { AddFlashCard } from "@/components/AddFlashCard";
import { FlashCardGrid } from "@/components/FlashCardGrid";
import { Header } from "@/components/Header";
import { ProfileImage } from "@/components/ProfileImage";
import CreateDeckModal from "@/components/modals/CreateDeckModal";
import { FlashCardModal } from "@/components/modals/FlashCardModal";
import NewFlashCard from "@/components/modals/NewFlashCard";

export default function Flashcards() {

  return (
    <section className="w-full min-h-[100dvh] p-4 space-y-4 flex flex-col items-center">
      <Header />
      <ProfileImage />

      <h1 className="font-bold text-3xl text-start w-full">Flash Cards</h1>
     <div className="flex gap-4 self-end">
     <AddDeck/>
     <AddFlashCard />
     </div>

      <FlashCardGrid />
      <CreateDeckModal />
      <NewFlashCard/>
    </section>
  );
}
