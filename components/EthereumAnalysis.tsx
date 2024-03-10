import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ethereumAnalysisData = {
  future_prediction: {
    next_day: "考虑到当前的市场情绪和技术指标，预计ETH价格短期内可能会测试 4000 USDT阻力位，但需谨慎全球宏观经济因素带来的不确定性。"
  },
  market_sentiment_analysis: {
    score: 75.0,
    sentiment: "积极"
  },
  market_trends: [
    {
      evidence: "根据1月份的数据，ETH的价格从2283 USDT上涨至3933 USDT，显示出强劲的上涨趋势。",
      trend: "ETH价格呈现上涨趋势"
    },
    {
      evidence: "通过综合分析新闻资讯和社交媒体动态，市场情绪呈现积极趋势。",
      trend: "市场情绪转向积极"
    }
  ],
  price_alert_points: [
    {
      alert_point: "突破 4000 USDT",
      reason: "4000 USDT是心理和技术的重要关口，一旦突破，可能会引发更强烈的买入情绪。",
      strategy: "如果ETH价格突破 4000 USDT，考虑增仓；但需注意调整止损位以控制风险。",
      type: "breakthrough"
    },
    {
      alert_point: "跌破 3800 USDT",
      reason: "3800 USDT是近期低点，跌破可能意味着短期内趋势反转。",
      strategy: "若ETH价格跌破 3800 USDT，建议减仓，同时关注是否能快速恢复此水平以上。",
      type: "fallback"
    }
  ],
  technical_analysis: "目前MACD线上升至2.04，高于信号线1.15，表明市场趋势向好。RSI值为51.8，表明市场目前未处于超买或超卖状态。K线和D线分别为54.28和60.88，接近超买区域，需注意可能的回调风险。EMA7日均线3904.34高于EMA30日均线3901.03，短期内保持小幅上涨趋势。"
};

function EthereumAnalysis() {
  const { future_prediction, market_sentiment_analysis, price_alert_points, technical_analysis } = ethereumAnalysisData;

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
          <div className="flex items-center space-x-2">

          </div>
        </CardContent>
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
                <p>{alert.alert_point}</p>
              </div>
              <p className="text-muted-foreground p-1">{alert.reason}</p>
              <p className="text-sm p-1">{alert.strategy}</p>
            </div>
          ))}
        </CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}

export default EthereumAnalysis;