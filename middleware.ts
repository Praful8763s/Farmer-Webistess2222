import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simulated authentication check - in a real app, this would verify JWT tokens or session cookies
const isAuthenticated = (request: NextRequest) => {
  const authToken = request.cookies.get("auth-token")?.value
  return !!authToken
}

// Middleware function that runs before requests
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Log all requests (useful for monitoring and debugging)
  console.log(`[${new Date().toISOString()}] ${request.method} ${pathname}`)

  // Protected routes that require authentication
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/orders")) {
    if (!isAuthenticated(request)) {
      // Redirect unauthenticated users to login page
      const url = new URL("/login", request.url)
      url.searchParams.set("from", pathname)
      return NextResponse.redirect(url)
    }
  }

  // Rate limiting for API routes (simple implementation)
  if (pathname.startsWith("/api/")) {
    const ip = request.ip || "unknown"
    const rateLimitKey = `rate-limit:${ip}:${pathname}`

    // In a real implementation, you would use Redis or another store to track request counts
    // For now, we'll just log it
    console.log(`Rate limit check for ${rateLimitKey}`)
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Apply to all routes except static files, api/auth routes, and _next
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
  ],
}
