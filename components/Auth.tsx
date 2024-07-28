'use client'

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { BsGithub } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc";

type Auth = {
    type: string
}

export const Auth = ({ type }: Auth) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center p-2">
        <section className="w-[600px] h-[600px] flex flex-col items-center justify-center gap-8">
            <h1 className="text-4xl font-bold tracking-wide">
                { type === "register" ? "Register" : "Login" }
            </h1>
            <Button
                className="w-[400px] flex items-center gap-8 text-[--text2] bg-black hover:bg-black"
                onClick={() => signIn()}
            >
                <BsGithub className="size-8"/>
                <p className="text-xl">Login</p>
            </Button>
            <Button
                className="w-[400px] flex items-center gap-8 text-[--text2] bg-white hover:bg-white border-black border-2"
                onClick={() => signIn()}
            >
                <FcGoogle className="size-8"/>
                <p className="text-xl text-black">Login</p>
            </Button>
        </section>
    </section>
  )
}
