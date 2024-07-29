import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { prisma } from "./lib/prisma";
 
export const { handlers, auth } = NextAuth({
  providers: [
    GitHub({
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  }),
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  })
],
  callbacks: {
    async redirect({ url, baseUrl }) {
        return url.startsWith(`${baseUrl}/login`) ? `${baseUrl}/dashboard` : url;
    },
    async signIn({ user }){
      try {
        const existingUser = await prisma.users.findUnique({
          where: {
            username: user.name!
          }
        })
        if(!existingUser){
          await prisma.users.create({
            data: {
              username: user.name!,
              avatar: user.image
            }
          })
        }
        return true
      } catch (error: any) {
        console.log(error.message)
        return false
      }
    }
    },
    pages: {
      signOut: "/login"
    }
  },
)

