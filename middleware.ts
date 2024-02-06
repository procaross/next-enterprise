// 引入相关模块和类型
import acceptLanguage from "accept-language"
import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { cookieName, fallbackLang, languages } from "./app/i18n/settings"

interface IpInfo {
  country: string
}

acceptLanguage.languages(languages)

const REGION_CHECK_COOKIE = "user_region"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const responseToReturn = NextResponse.next()

  // 限制特定地区访问
  if (!pathname.includes("/china-specific-page")) {
    // 开发测试环境中，为环境变量中设定的地区（暂无cookie逻辑）
    if (process.env.NODE_ENV !== "production") {
      const devLocation = process.env.DEV_LOCATION
      if (devLocation === "CN") {
        return NextResponse.redirect(new URL("/china-specific-page", request.url))
      }
    }

    // 生产环境通过cookie记录下用户第一次被检测的地区，减少API调用与pending时长
    if (process.env.NODE_ENV === "production") {
      const cookies = request.cookies
      const currentRegionCookie = (cookies.get(REGION_CHECK_COOKIE) || "") as string

      if (currentRegionCookie) {
        if (currentRegionCookie === "CN") {
          return NextResponse.redirect(new URL("/china-specific-page", request.url))
        }
      } else {
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

          responseToReturn.cookies.set(REGION_CHECK_COOKIE, country, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
          })

          if (country === "CN") {
            return NextResponse.redirect(new URL("/china-specific-page", request.url))
          }
        } catch (error) {
          console.error("Error fetching IP information:", error)
        }
      }
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

    if (langInReferer)
      responseToReturn.cookies.set(cookieName, langInReferer, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
  }

  return responseToReturn
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
}
