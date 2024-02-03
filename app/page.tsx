import { Metadata } from "next"
import { UserButton } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "登录 CryptoInsight Pro",
  description: "链见未来，CryptoInsight Pro",
}

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
