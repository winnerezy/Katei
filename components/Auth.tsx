'use client'

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { BsGithub } from "react-icons/bs"

type Auth = {
    type: string
}

export const Auth = ({ type }: Auth) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center p-2">
        <section className="w-full h-[600px] flex flex-col items-center justify-center gap-8">
            <h1 className="text-3xl font-bold">
                { type === "register" ? "Register" : "Login" }
            </h1>
            <Button
                className="w-[300px] flex items-center gap-4 text-[--text2] bg-black hover:bg-black"
                onClick={() => signIn()}
            >
                <BsGithub className="size-8"/>
                <p className="text-xl">Login</p>
            </Button>
        </section>
    </section>
  )
}
