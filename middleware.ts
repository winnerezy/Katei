import { auth } from "@/auth"

export default auth((req) => {

  const protactedPaths = ["/dashboard", "/assignments", "/flashcards", "/planner", "/settings"]
  
  if (!req.auth && protactedPaths.includes(req.nextUrl.pathname)) {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}