import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { prisma } from "./lib/prisma";
 
export const { handlers, auth } = NextAuth({
  providers: [GitHub({
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
  })],
  callbacks: {
    async redirect({ url, baseUrl }) {
        return url.startsWith(`${baseUrl}/register`) ? `${baseUrl}/dashboard` : url;
    }
    }
  }
)
