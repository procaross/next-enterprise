import { Metadata } from "next"
import { getCurrentLocale, getScopedI18n } from "@/locales/server"
import KlineChart from "@/components/KlineChart";
import { SupportedLocales } from '@/types/i18n'
export async function generateMetadata(): Promise<Metadata> {
  const scopedTMetaData = await getScopedI18n("metaData")

  return {
    title: scopedTMetaData("homePageTitle"),
    description: scopedTMetaData("homePageDescription"),
  }
}

export default function Home() {
  const localeMap: { [key: string]: SupportedLocales } = {
    "zh-CN": "zh_CN",
    "en": "en",
  };
  const locale = localeMap[getCurrentLocale()] || "en";

  return (
    <div className="overflow-hidden">
      <KlineChart locale={locale}/>
    </div>
  )
}
