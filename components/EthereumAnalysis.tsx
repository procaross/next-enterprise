import React, { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button'
import { IdCardIcon } from '@radix-ui/react-icons'
import TechnicalAnalysis from "@/components/TechnicalAnalysis";
import { SupportedLocales } from "@/types/i18n";
import Link from 'next/link';

const ethereumAnalysisData = {
  future_prediction: {
    next_day: "基于目前的市场分析和技术指标，预计ETH的价格将继续保持轻微波动，可能在3900至4000 USDT之间波动。需关注全球市场动向和相关加密货币新闻，以便适时调整策略。"
  },
  market_sentiment_analysis: {
    reason: "最近的以太坊价格显示了轻微的上升趋势，结合最新的MACD和RSI指标，市场情绪呈现出轻微积极态势。市场新闻和社交媒体上关于以太坊的讨论积极，但需警惕可能的价格波动。",
    score: 65.0,
    sentiment: "积极"
  },
  market_trends: [
    {
      evidence: "从1个月的数据来看，以太坊价格从3200 USDT上涨至约3944 USDT，显示出稳定的上升趋势。",
      trend: "ETH价格轻微上升"
    },
    {
      evidence: "MACD在最近的数据中高于信号线，且RSI指标接近中性偏多头，反映出市场存在一定的买入兴趣。",
      trend: "技术指标显示轻微买入信号"
    }
  ],
  price_alert_points: [
    {
      alert_point: 3920,
      reason: "以目前的EMA7和EMA30为准，3920 USDT可作为短期支撑位",
      strategy: "如果ETH价格下跌至3920 USDT附近，可以考虑逢低买入",
      type: "fallback"
    },
    {
      alert_point: 3980,
      reason: "结合MACD和RSI指标，如果价格能稳定超过3980 USDT，可能会吸引更多买家进入市场",
      strategy: "如果ETH价格能突破并稳定在3980 USDT以上，可考虑增持或等待更明确的上涨趋势确认后买入",
      type: "breakthrough"
    }
  ],
  technical_analysis: "目前MACD指标显示轻微的多头信号，且RSI指标处在51.79，接近中性偏多头区域。K线和D线显示市场可能存在一定的超买风险。EMA7略微高于EMA30，显示短期内价格有继续上升的潜力，但需要警惕反转风险。",
  trading_alert: {
    action: "buy",
    predicted_price: 3925,
    time: "2023-03-31T14:00:00Z"
  }
};

async function fetchEthereumAnalysisData() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const data = ethereumAnalysisData;

  return data;
}

async function EthereumAnalysis(props: { locale: SupportedLocales}) {
  const AnalysisData = await fetchEthereumAnalysisData()
  const { future_prediction, market_sentiment_analysis, price_alert_points, technical_analysis, trading_alert } = AnalysisData;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card className="col-span-1 max-w-sm">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center space-x-2">
              <span className={`flex h-3 w-3 rounded-full ${market_sentiment_analysis.score > 50 ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={`${market_sentiment_analysis.score > 50 ? 'text-green-500' : 'text-red-500'}`}>{market_sentiment_analysis.sentiment}</span>
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
              <IdCardIcon className="mr-2 h-4 w-4" /> 了解更多
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
                <span className={`flex h-3 w-3 rounded-full ${alert.type === 'breakthrough' ? 'bg-green-500' : 'bg-red-500'}`} />
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
    </div>
  );
}

export default EthereumAnalysis;