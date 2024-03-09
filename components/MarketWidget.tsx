"use client"
import dynamic from 'next/dynamic';
import { SupportedLocales } from '@/types/i18n'

const CryptoCurrencyMarketNoSSR = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.CryptoCurrencyMarket),
  {
    ssr: false,
  }
);

export default function KlineChart(props: { locale: SupportedLocales}) {
  return (
    <div className="h-screen">
      <CryptoCurrencyMarketNoSSR colorTheme="light" autosize locale={props.locale} />
    </div>
  );
}