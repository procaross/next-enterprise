import React from 'react';
import CryptoTimeline from "@/components/CryptoTimeline";
import MarketSentimentChart from "@/components/MarketSentimentChart";
import TwitterFeed from "@/components/TwitterFeed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { SupportedLocales } from "@/types/i18n";
import type { Metadata } from "next";
import TwitterFeedSkeleton from "@/components/skeleton/TwitterFeedSkeleton";

export async function generateMetadata(): Promise<Metadata> {
  const scopedTMetaData = await getScopedI18n("metaData")
  return {
    title: scopedTMetaData("newsTitle"),
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
      <div className="lg:hidden px-2">
        <Tabs defaultValue="crypto">
          <TabsList className="flex px-1">
            <TabsTrigger value="crypto" className="w-full">Crypto Timeline</TabsTrigger>
            <TabsTrigger value="market" className="w-full">Market Sentiment</TabsTrigger>
            <TabsTrigger value="twitter" className="w-full">Twitter Feed</TabsTrigger>
          </TabsList>

          <TabsContent value="crypto">
            <CryptoTimeline locale={locale}/>
          </TabsContent>

          <TabsContent value="market">
            <MarketSentimentChart locale={locale}/>
          </TabsContent>

          <TabsContent value="twitter">
            <TwitterFeed/>
          </TabsContent>
        </Tabs>
      </div>

      <div className="hidden lg:flex overflow-hidden px-12 pt-4">
        <div className="w-2/5">
          <CryptoTimeline locale={locale}/>
          <MarketSentimentChart locale={locale}/>
        </div>

        <div className="w-3/4">
          {/*<TwitterFeed/>*/}
          <TwitterFeedSkeleton/>
        </div>
      </div>
    </div>
  );
}