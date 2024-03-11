import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CryptoTimeline from "@/components/CryptoTimeline";
import TwitterFeed from "@/components/TwitterFeed";
import { SupportedLocales } from "@/types/i18n";
import { getCurrentLocale } from "@/locales/server";

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
            <TabsTrigger value="twitter" className="w-full">Twitter Feed</TabsTrigger>
          </TabsList>

          <TabsContent value="crypto">
            <CryptoTimeline locale={locale}/>
          </TabsContent>

          <TabsContent value="twitter">
            <TwitterFeed/>
          </TabsContent>
        </Tabs>
      </div>

      <div className="hidden lg:flex overflow-hidden">
        <div className="w-2/5 p-2">
          <CryptoTimeline locale={locale}/>
        </div>

        <div className="w-3/4 p-2">
          <TwitterFeed/>
        </div>
      </div>
    </div>
  );
}