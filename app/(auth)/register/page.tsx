import { Auth } from "@/components/Auth";
import { useSession } from "next-auth/react";

export default function Register() {
    return (
      <main className="w-full flex items-center justify-center">
        <Auth type="register"/>
      </main>
    )
  }
  