"use client"
import dynamic from 'next/dynamic';
import { SupportedLocales } from '@/types/i18n'

const MiniChartNoSSR = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MiniChart),
  {
    ssr: false,
  }
);

export default function MiniChart(props: { locale: SupportedLocales}) {
  return (
    <div className="h-full overflow-hidden">
      <MiniChartNoSSR colorTheme="light" autosize symbol="COINBASE:ETHUSD" locale={props.locale} dateRange="1D" largeChartUrl="http:/127.0.0.1:3000/kline"/>
    </div>
  );
}