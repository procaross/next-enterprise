import type { Metadata } from "next"
import { Inter } from "next/font/google"

import React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "登录 CryptoInsight Pro",
  description: "链见未来，CryptoInsight Pro",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cn">
      <body className={`${inter.className} flex h-screen items-center justify-center`}>
        <div className="[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]absolute absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        {children}
      </body>
    </html>
  )
}
