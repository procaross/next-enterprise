'use client'
import { IdCardIcon } from '@radix-ui/react-icons'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TechnicalAnalysis from "@/components/TechnicalAnalysis";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { SupportedLocales } from "@/types/i18n";
import EthereumAnalysisSkeleton from "@/components/skeleton/EthereumAnalysisSkeleton";


interface FuturePrediction {
  next_day: string;
}

interface MarketSentimentAnalysis {
  reason: string;
  score: number;
  sentiment: string;
}

interface MarketTrend {
  evidence: string;
  trend: string;
}

interface PriceAlertPoint {
  alert_point: number;
  reason: string;
  strategy: string;
  type: string;
}

interface TradingAlert {
  action: string;
  predicted_price: number;
  time: string;
}

interface EthereumAnalysisData {
  future_prediction: FuturePrediction;
  market_sentiment_analysis: MarketSentimentAnalysis;
  market_trends: MarketTrend[];
  price_alert_points: PriceAlertPoint[];
  technical_analysis: string;
  trading_alert: TradingAlert;
  timestamp: number;
  is_latest: boolean;
  user_points: number;
}

async function fetchEthereumAnalysisData(): Promise<EthereumAnalysisData> {
  const res = await fetch('http://127.0.0.1:5000/get-analysis', {
    credentials: 'include'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<EthereumAnalysisData>;
}

const EthereumAnalysis = (props: { locale: SupportedLocales }) => {
  const [analysisData, setAnalysisData] = useState<EthereumAnalysisData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEthereumAnalysisData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5000/get-analysis', {
          credentials: 'include'
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        // @ts-ignore
        setAnalysisData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }

    fetchEthereumAnalysisData();
  }, []);

  if (isLoading) return <EthereumAnalysisSkeleton/>;
  if (!analysisData) return <p>No analysis data</p>;

  const { future_prediction, market_sentiment_analysis,
    price_alert_points, technical_analysis, trading_alert, timestamp, is_latest, user_points } = analysisData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center space-x-2">
              <span className={`flex h-3 w-3 rounded-full ${market_sentiment_analysis.score > 50 ? 'bg-green-500' :
                'bg-red-500'}`}/>
              <span className={`${market_sentiment_analysis.score > 50 ? 'text-green-500' :
                'text-red-500'}`}>{market_sentiment_analysis.sentiment}</span>
              <p>市场情绪分析</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-bold text-8xl">{market_sentiment_analysis.score}</p>
          <CardDescription className="pt-4 pl-1">{market_sentiment_analysis.reason}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link href="/news" passHref className="w-full">
            <Button className="w-full">
              <IdCardIcon className="mr-2 h-4 w-4"/> 了解更多
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <CardTitle>价格预警点</CardTitle>
        </CardHeader>
        <CardContent>
          {price_alert_points.map((alert, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex items-center space-x-2">
                <span className={`flex h-3 w-3 rounded-full ${alert.type === 'breakthrough' ? 'bg-green-500' :
                  'bg-red-500'}`}/>
                <p>{alert.alert_point} USDT</p>
              </div>
              <p className="text-muted-foreground p-1">{alert.reason}</p>
              <p className="text-sm p-1">{alert.strategy}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <TechnicalAnalysis locale={props.locale}/>
      </Card>
      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <CardTitle>技术分析</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{technical_analysis}</CardDescription>
        </CardContent>
      </Card>

      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <CardTitle>未来预测</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{future_prediction.next_day}</CardDescription>
          <div className="mt-4">
            <CardTitle>AI交易员</CardTitle>
            <p className="mt-4">
              交易行为：
              <span className={`${trading_alert.action === 'buy' ? 'text-green-500' :
                trading_alert.action === 'sell' ? 'text-red-500' : 'text-gray-500'} font-bold mx-1`}>
                {trading_alert.action}
              </span>
            </p>
            <p>
              预测价格:
              <span className={`${trading_alert.action === 'buy' ? 'text-green-500' :
                trading_alert.action === 'sell' ? 'text-red-500' : 'text-gray-500'} font-bold mx-2`}>
                {trading_alert.predicted_price}
              </span>USDT
            </p>
            <p className='text-gray-500'>交易时间: {new Date(trading_alert.time).toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>
      <div className="mb-4">
        <p>剩余分析次数: {user_points}</p>
        <p>报告生成时间: {new Date(timestamp * 1000).toLocaleString()}</p>
      </div>
      { !is_latest && (
        <Button onClick={() => fetchEthereumAnalysisData()}>获取最新报告</Button>
      )}
    </div>
  );
}

export default EthereumAnalysis;