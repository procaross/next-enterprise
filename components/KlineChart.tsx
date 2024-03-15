"use client"
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { SupportedLocales } from '@/types/i18n';

const AdvancedRealTimeChartNoSSR = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

export default function KlineChart(props: { locale: SupportedLocales }) {
  const searchParams = useSearchParams();
  const tvwidgetsymbol = searchParams.get('tvwidgetsymbol')
  const symbol = tvwidgetsymbol ? String(tvwidgetsymbol) : 'COINBASE:ETHUSD';

  return (
    <div className="h-[92vh] overflow-hidden">
      <AdvancedRealTimeChartNoSSR theme="light" autosize symbol={symbol} interval="1" locale={props.locale} />
    </div>
  );
}