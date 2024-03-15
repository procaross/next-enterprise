import React from 'react';
import CryptoTimeline from "@/components/CryptoTimeline";
import MarketSentimentChart from "@/components/MarketSentimentChart";
import TwitterFeed from "@/components/TwitterFeed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCurrentLocale } from "@/locales/server";
import { SupportedLocales } from "@/types/i18n";

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
          <TwitterFeed/>
        </div>
      </div>
    </div>
  );
}