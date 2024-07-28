import { Auth } from "@/components/Auth";
import { useSession } from "next-auth/react";

export default function Login() {
    return (
      <main className="w-full flex items-center justify-center">
        <Auth type="login"/>
      </main>
    )
  }
  