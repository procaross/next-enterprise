import { Metadata } from "next"
import React from "react"
import { getScopedI18n } from "@/locales/server"

export async function generateMetadata(): Promise<Metadata> {
  const scopedTMetaData = await getScopedI18n("metaData")
  return {
    title: scopedTMetaData("appUnavailable"),
  }
}

export default function SRegionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      {children}
    </div>
  )
}
