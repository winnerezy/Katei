'use client'
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const Hero = () => {

    const router = useRouter()
  return (
    <SectionWrapper className="flex-col gap-4 items-center justify-center">
        <p className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wide text-center leading-[40px] md:leading-[60px]">
        Manage your day <span className="text-[--text]">effectively</span> and <span className="text-[--text]">efficiently</span>
        </p>
        <p className="text-sm md:text-2xl font-extralight">
        Balance school and your personal life equally
        </p>
        <Button 
        className="bg-[--button] text-[--text2] hover:bg-[--button-hover] flex items-center gap-2"
        onClick={()=> router.push('/register')}
        >
           <p>Get Started</p>
           <ArrowRight className="w-4 h-4"/>
        </Button>
    </SectionWrapper>
  )
}
