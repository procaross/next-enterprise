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
    <div className="lg:h-[45vh] overflow-hidden h-[86vh]">
      <TimelineNoSSR colorTheme="light" autosize symbol="COINBASE:ETHUSD" locale={props.locale} />
    </div>
  );
}