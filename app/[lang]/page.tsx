import { Metadata } from "next"
import { getCurrentLocale, getScopedI18n } from "@/locales/server"
import { SupportedLocales } from '@/types/i18n'
import EthereumAnalysis from "@/components/EthereumAnalysis";
import WhaleTransactionSankeyViz from "@/components/WhaleTransactionSankeyViz";

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
    <div className="overflow-hidden px-12 pt-4">
      <div className="mb-12">
        <EthereumAnalysis locale={locale}/>
      </div>

      <WhaleTransactionSankeyViz/>
    </div>
  )
}
