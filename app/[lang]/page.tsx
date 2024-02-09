import { Metadata } from "next"
import { getScopedI18n } from "@/locales/server"

export async function generateMetadata(): Promise<Metadata> {
  const scopedTMetaData = await getScopedI18n("metaData")

  return {
    title: scopedTMetaData("homePageTitle"),
    description: scopedTMetaData("homePageDescription"),
  }
}

export default function Home() {
  return <div className="h-screen"></div>
}
