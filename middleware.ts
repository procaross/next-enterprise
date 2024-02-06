// 引入相关模块和类型
import acceptLanguage from "accept-language"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { cookieName, fallbackLang, languages } from "./app/i18n/settings"

interface IpInfo {
  country: string
}

acceptLanguage.languages(languages)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 特定地区逻辑
  if (!pathname.includes("/china-specific-page")) {
    const devLocation = process.env.DEV_LOCATION

    if (process.env.NODE_ENV === "development") {
      if (devLocation === "CN") {
        return NextResponse.redirect(new URL("/china-specific-page", request.url))
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

      const data: IpInfo = (await response.json()) as IpInfo
      const country = data.country

      if (country === "CN") {
        return NextResponse.redirect(new URL("/china-specific-page", request.url))
      }
    } catch (error) {
      console.error("Error fetching IP information:", error)
    }
  }

  let lang: string | undefined

  if (request.cookies.has(cookieName)) {
    lang = acceptLanguage.get(request.cookies.get(cookieName)?.value || "") || ""
  }

  if (!lang) {
    lang = acceptLanguage.get(request.headers.get("Accept-Language") || "") || ""
  }

  if (!lang) lang = fallbackLang

  if (
    !languages.some((loc) => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !request.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lang}${request.nextUrl.pathname}`, request.url)
    )
  }

  if (request.headers.has("referer")) {
    const refererUrl = new URL(request.headers.get("referer") || "")

    const langInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))

    if (langInReferer) NextResponse.next().cookies.set(cookieName, langInReferer)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
}
