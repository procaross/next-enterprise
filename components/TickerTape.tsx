"use client"
import dynamic from 'next/dynamic';
import { SupportedLocales } from '@/types/i18n'
import { TickerTapeSymbol } from "react-ts-tradingview-widgets";

const TickerTapeNoSSR = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

const TickerSymbol = [
  {
    "proName": "FOREXCOM:SPXUSD",
    "title": "S&P 500"
  },
  {
    "proName": "FOREXCOM:NSXUSD",
    "title": "Nasdaq 100"
  },
  {
    "proName": "FX_IDC:EURUSD",
    "title": "EUR/USD"
  },
  {
    "proName": "BITSTAMP:BTCUSD",
    "title": "BTC/USD"
  },
  {
    "proName": "BITSTAMP:ETHUSD",
    "title": "ETH/USD"
  }
] as TickerTapeSymbol[]

export default function TickerTape(props: { locale: SupportedLocales}) {
  return (
    <div className="overflow-hidden">
      <TickerTapeNoSSR colorTheme="light" symbols={TickerSymbol} locale={props.locale} largeChartUrl="http:/127.0.0.1:3000/kline"/>
    </div>
  );
}