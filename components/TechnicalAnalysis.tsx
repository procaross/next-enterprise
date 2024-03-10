"use client"
import dynamic from 'next/dynamic';
import { SupportedLocales } from '@/types/i18n'

const TechnicalAnalysisNoSSR = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.TechnicalAnalysis),
  {
    ssr: false,
  }
);

export default function TechnicalAnalysis(props: { locale: SupportedLocales}) {
  return (
    <div className="h-full">
      <TechnicalAnalysisNoSSR colorTheme="light" symbol="COINBASE:ETHUSD" interval="1D" locale={props.locale} showIntervalTabs={false} autosize/>
    </div>
  );
}