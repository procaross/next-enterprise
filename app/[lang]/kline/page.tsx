import React from 'react';
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { SupportedLocales } from "@/types/i18n";
import KlineChart from "@/components/KlineChart";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const scopedTMetaData = await getScopedI18n("metaData")
  return {
    title: scopedTMetaData("klineTitle"),
  }
}

export default function Page() {
  const localeMap: { [key: string]: SupportedLocales } = {
    "zh-CN": "zh_CN",
    "en": "en",
  };

  const locale = localeMap[getCurrentLocale()] || "en";

  return (
    <div>
      <KlineChart locale={locale}/>
    </div>
  );
}