import type { Metadata } from "next"
import React from "react"
import { getCurrentLocale } from "@/locales/server"
import { Provider } from "../provider"

export const metadata: Metadata = {
  title: "登录 CryptoInsight Pro",
  description: "链见未来，CryptoInsight Pro",
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const locale = getCurrentLocale()
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <Provider locale={locale}>{children}</Provider>
    </div>
  )
}
