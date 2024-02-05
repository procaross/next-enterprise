import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

interface IpInfo {
  country: string
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === "/china-specific-page") {
    return NextResponse.next()
  }

  const devLocation = process.env.DEV_LOCATION
  if (process.env.NODE_ENV === "development") {
    if (devLocation === "CN") {
      return NextResponse.redirect(
        new URL("/china-specific-page", request.url)
      )
    } else {
      return NextResponse.next()
    }
  }

  const ip = request.headers.get("X-Forwarded-For") || ""

  try {
    const response = await fetch(
      `https://ipinfo.io/${ip}?token=${process.env.IPINFO_API_KEY}`
    )
    if (!response.ok) {
      throw new Error("Failed to fetch IP information")
    }
    const data = (await response.json()) as IpInfo
    const country = data.country

    if (country === "CN") {
      return NextResponse.redirect(
        new URL("/china-specific-page", request.url)
      )
    }
    return NextResponse.next()
  } catch (error) {
    console.error("Error fetching IP information:", error)
    return NextResponse.next()
  }
}
