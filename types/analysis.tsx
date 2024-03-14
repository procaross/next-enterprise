export interface FuturePrediction {
  next_day: string;
}

export interface MarketSentimentAnalysis {
  reason: string;
  score: number;
  sentiment: string;
}

export interface MarketTrend {
  evidence: string;
  trend: string;
}

export interface PriceAlertPoint {
  alert_point: number;
  reason: string;
  strategy: string;
  type: string;
}

export interface TradingAlert {
  action: string;
  predicted_price: number;
  time: string;
}

export interface EthereumAnalysisData {
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
