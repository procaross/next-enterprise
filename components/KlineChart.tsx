"use client"
import dynamic from 'next/dynamic';
import { SupportedLocales } from '@/types/i18n'

const AdvancedRealTimeChartNoSSR = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

export default function KlineChart(props: { locale: SupportedLocales}) {
  return (
    <div className="h-[92vh] overflow-hidden">
      <AdvancedRealTimeChartNoSSR theme="light" autosize symbol="COINBASE:ETHUSD" interval="1" locale={props.locale} />
    </div>
  );
}