'use client'
import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TransactionData {
  from: string;
  to: string;
  amount: number;
}

async function fetchTransactionData(): Promise<TransactionData[]> {
  const res = await fetch('http://127.0.0.1:5000/transactions');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json() as Promise<TransactionData[]>;
}

const shortenAddress = (address: string, isLargeAmount = false): string => {
  const showChars = isLargeAmount ? 10 : 5;
  return `${address.substring(0, showChars)}...${address.substring(address.length - showChars)}`;
};


const WhaleTransactionSankeyViz: React.FC = () => {
  const [data, setData] = useState<(string | number)[][]>([]);

  useEffect(() => {
    (async () => {
      try {
        const rawData = await fetchTransactionData();

        const threshold = rawData.reduce((a, b) => a + b.amount, 0) / rawData.length;

        const formattedData: (string | number)[][] = [['From', 'To', 'Weight']];
        let othersSum = 0;

        rawData.forEach(transaction => {
          const isLargeAmount = transaction.amount > threshold;
          if (!isLargeAmount) {
            othersSum += transaction.amount;
          } else {
            formattedData.push([
              shortenAddress(transaction.from, true),
              shortenAddress(transaction.to, true),
              transaction.amount,
            ]);
          }
        });

        if (othersSum > 0) {
          formattedData.push(['Others', 'The Others', othersSum]);
        }

        setData(formattedData);
      } catch (error) {
        console.error('Failed to fetch and format data', error);
      }
    })();
  }, []);

  const options = {
    sankey: {
      link: { color: { fill: '#535C91' } },
      node: {
        colors: ['#070F2B', '#1B1A55', '#535C91', '#9290C3'],
        label: { color: '#1B1A55' },
      },
    },
  };

  return (
    <div className="max-w-8xl mx-auto">
      <Card>
        <CardHeader>
        </CardHeader>
        <CardContent>
          <Chart
            chartType="Sankey"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
      </CardContent>
    </Card>
</div>
);
};

export default WhaleTransactionSankeyViz;