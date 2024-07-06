import { Footer } from "@/components/Footer";
import { HeaderWrapper } from "@/components/HeaderWrapper";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function Onboarding() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <HeaderWrapper>
        <div>
          <p className="font-bold text-2xl text-[--text2]">Katei</p>
        </div>
      </HeaderWrapper>
      <Hero/>
      <SectionWrapper className="bg-[--bg] flex-col justify-center">
        <p className="text-[--text2] font-light tracking-wide w-1/2">
        Effortless Organization:  Pearl keeps you on top of your schedule with a centralized calendar and task management system.  Never miss a deadline or important event again!
        </p>
      </SectionWrapper>
      <SectionWrapper className="">
        sec2
      </SectionWrapper>
      <SectionWrapper className="bg-[--bg] ">
        sec3
      </SectionWrapper>
      <Footer/>
    </main>
  )
}
