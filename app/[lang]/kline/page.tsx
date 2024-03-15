import React from 'react';
import CryptoTimeline from "@/components/CryptoTimeline";
import MarketSentimentChart from "@/components/MarketSentimentChart";
import TwitterFeed from "@/components/TwitterFeed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCurrentLocale } from "@/locales/server";
import { SupportedLocales } from "@/types/i18n";
import KlineChart from "@/components/KlineChart";

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