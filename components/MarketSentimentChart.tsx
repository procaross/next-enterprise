"use client"
import { createChart, ISeriesApi } from 'lightweight-charts'
import { useEffect, useRef, useState } from 'react'
import { SupportedLocales } from '@/types/i18n'


export default function MarketSentimentChart(props: { locale: SupportedLocales }) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<ISeriesApi<"Area"> | null>(null)
  const [sentimentHistory, setSentimentHistory] = useState([])

  useEffect(() => {
    const fetchSentimentHistory = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/get-sentiment-history')
        const data = await response.json()
        // @ts-ignore
        setSentimentHistory(data.sentiment_history)
      } catch (error) {
        console.error('Error fetching sentiment history:', error)
      }
    }

    fetchSentimentHistory()
  }, [])

  useEffect(() => {
    if (chartContainerRef.current && !chartRef.current && sentimentHistory.length > 0) {
      const chartOptions = {
        layout: {
          textColor: 'black',
          background: { type: 'solid', color: 'white' },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        }
      };

      // @ts-ignore
      const chart = createChart(chartContainerRef.current, chartOptions);

      const baselineSeries = chart.addBaselineSeries({
        baseValue: {
          type: 'price',
          price: 50
        },
        topLineColor: 'rgba( 38, 166, 154, 1)',
        topFillColor1: 'rgba( 38, 166, 154, 0.28)',
        topFillColor2: 'rgba( 38, 166, 154, 0.05)',
        bottomLineColor: 'rgba( 239, 83, 80, 1)',
        bottomFillColor1: 'rgba( 239, 83, 80, 0.05)',
        bottomFillColor2: 'rgba( 239, 83, 80, 0.28)'
      });

      const formattedData = sentimentHistory
        .map(({ sentiment_score, timestamp }) => ({
          value: sentiment_score,
          time: timestamp,
        }))
        .sort((a, b) => a.time - b.time);

      // @ts-ignore
      baselineSeries.setData(formattedData);

      chart.timeScale().fitContent();

      // @ts-ignore
      chartRef.current = baselineSeries;
    }
  }, [sentimentHistory]);

  return (
    <div className="h-[42vh] mt-4 p-2 border border-tv-border-dark rounded-sm">
      <div ref={chartContainerRef} className="h-[40vh]" />
    </div>
  )
}