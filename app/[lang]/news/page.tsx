import CryptoTimeline from "@/components/CryptoTimeline";
import { SupportedLocales } from "@/types/i18n";
import { getCurrentLocale } from "@/locales/server";

export default function Page() {
  const localeMap: { [key: string]: SupportedLocales } = {
    "zh-CN": "zh_CN",
    "en": "en",
  };
  const locale = localeMap[getCurrentLocale()] || "en";

  return (
    <div className="overflow-hidden">
      <CryptoTimeline locale={locale}/>
    </div>
  )
}
