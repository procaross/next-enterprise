// import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { createI18nMiddleware } from "next-international/middleware"

// interface IpInfo {
//   country: string
// }

const locales = ["en", "zh-CN"]

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: "en",
  resolveLocaleFromRequest: (request: NextRequest) => {
    const acceptLanguage = request.headers.get("Accept-Language")
    if (acceptLanguage) {
      const preferredLanguages = acceptLanguage
        .split(",")
        .map((lang) => {
          const parts = lang.split(";q=")
          return {
            code: parts[0]!.trim(),
            quality: parts.length > 1 ? Number(parts[1]) : 1,
          }
        })
        .sort((a, b) => b.quality - a.quality)

      for (const lang of preferredLanguages) {
        if (locales.includes(lang.code)) {
          return lang.code
        }
      }
    }
    // 没找到支持列表中的语言或请求头不存在
    return null
  },
})

// const REGION_CHECK_COOKIE = "user_region"

export async function middleware(request: NextRequest) {
  return I18nMiddleware(request)

  // TODO: 限制特定地区访问（如何将I18nMiddleware返回的response和下面的response结合）
  // const { pathname } = request.nextUrl
  // const responseToReturn = NextResponse.next()
  // if (!pathname.includes("/china-specific-page")) {
  //   // 开发测试环境中，为环境变量中设定的地区（暂无cookie逻辑）
  //   if (process.env.NODE_ENV !== "production") {
  //     const devLocation = process.env.DEV_LOCATION
  //     if (devLocation === "CN") {
  //       return NextResponse.redirect(new URL("/china-specific-page", request.url))
  //     }
  //   }

  //   // 生产环境通过cookie记录下用户第一次被检测的地区，减少API调用与pending时长
  //   if (process.env.NODE_ENV === "production") {
  //     const cookies = request.cookies
  //     const currentRegionCookie = cookies.get(REGION_CHECK_COOKIE)

  //     if (currentRegionCookie?.value === "CN") {
  //       return NextResponse.redirect(new URL("/china-specific-page", request.url))
  //     } else {
  //       const ip = request.headers.get("X-Forwarded-For") || ""
  //       try {
  //         const response = await fetch(
  //           `https://ipinfo.io/${ip}?token=${process.env.IPINFO_API_KEY}`
  //         )

  //         if (!response.ok) {
  //           throw new Error("Failed to fetch IP information")
  //         }

  //         const data: IpInfo = (await response.json()) as IpInfo
  //         const country = data.country

  //         responseToReturn.cookies.set(REGION_CHECK_COOKIE, country, {
  //           httpOnly: true,
  //           secure: true,
  //           sameSite: "strict",
  //         })

  //         if (country === "CN") {
  //           return NextResponse.redirect(new URL("/china-specific-page", request.url))
  //         }
  //       } catch (error) {
  //         console.error("Error fetching IP information:", error)
  //       }
  //     }
  //   }
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)"],
}
