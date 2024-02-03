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
    <html lang="en">
      <body className={`${inter.className} flex h-screen items-center justify-center`}>{children}</body>
    </html>
  )
}
