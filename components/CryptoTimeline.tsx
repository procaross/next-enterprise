"use client"
import dynamic from 'next/dynamic';
import { SupportedLocales } from '@/types/i18n'

const TimelineNoSSR = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.Timeline),
  {
    ssr: false,
  }
);

export default function CryptoTimeline(props: { locale: SupportedLocales}) {
  return (
    <div className="h-[92vh] overflow-hidden">
      <TimelineNoSSR colorTheme="light" autosize symbol="COINBASE:ETHUSD" locale={props.locale} />
    </div>
  );
}