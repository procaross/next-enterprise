"use client"
import dynamic from 'next/dynamic';
import { SupportedLocales } from '@/types/i18n'

const CryptoCoinsHeatmapNoSSR = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.CryptoCoinsHeatmap),
  {
    ssr: false,
  }
);

export default function CryptoCoinsHeatmap(props: { locale: SupportedLocales}) {
  return (
    <div className="h-[85vh]">
      <CryptoCoinsHeatmapNoSSR colorTheme="light" locale={props.locale} dataSource="Crypto" autoSize symbolUrl="http://127.0.0.1:3000/kline"/>
    </div>
  );
}