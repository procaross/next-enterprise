import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Transaction {
  from: string;
  to: string;
  amount: number;
}

async function fetchEthereumAnalysisData() {
  await new Promise(resolve => setTimeout(resolve, 1000));
}

const WhaleTransactionSankeyViz: React.FC = async () => {
  const [data, setData] = useState<(string | number)[][]>([]);

  useEffect(() => {
    const mockData: Transaction[] = [
      { from: 'Wallet1', to: 'Exchange1', amount: 100000 },
      { from: 'Wallet2', to: 'Wallet3', amount: 75000 },
      { from: 'Exchange2', to: 'Wallet4', amount: 120000 },
      { from: 'Wallet5', to: 'Wallet6', amount: 85000 },
      { from: 'Wallet7', to: 'Exchange1', amount: 95000 },
      { from: 'Wallet8', to: 'Wallet9', amount: 60000 },
      { from: 'Wallet10', to: 'Exchange3', amount: 110000 },
      { from: 'Wallet11', to: 'Wallet12', amount: 80000 },
      { from: 'Exchange4', to: 'Wallet13', amount: 70000 },
      { from: 'Wallet14', to: 'Wallet15', amount: 90000 },
      { from: 'Wallet16', to: 'Exchange2', amount: 1050000 },
      { from: 'Wallet17', to: 'Wallet18', amount: 65000 },
      { from: 'Exchange1', to: 'Wallet19', amount: 115000 },
      { from: 'Wallet20', to: 'Wallet21', amount: 75000 },
      { from: 'Wallet22', to: 'Exchange3', amount: 85000 },
      { from: 'Wallet23', to: 'Wallet24', amount: 95000 },
      { from: 'Exchange4', to: 'Wallet25', amount: 80000 },
      { from: 'Wallet26', to: 'Wallet27', amount: 700000 },
      { from: 'Wallet28', to: 'Exchange1', amount: 100000 },
      { from: 'Wallet29', to: 'Wallet30', amount: 90000 },
      { from: 'Exchange2', to: 'Wallet31', amount: 105000 },
      { from: 'Wallet32', to: 'Wallet33', amount: 75000 },
      { from: 'Wallet34', to: 'Exchange3', amount: 120000 },
      { from: 'Wallet35', to: 'Wallet36', amount: 85000 },
      { from: 'Wallet37', to: 'Exchange4', amount: 95000 },
      { from: 'Wallet38', to: 'Wallet39', amount: 80000 },
      { from: 'Exchange1', to: 'Wallet40', amount: 110000 },
      { from: 'Wallet41', to: 'Wallet42', amount: 70000 },
      { from: 'Wallet43', to: 'Exchange2', amount: 90000 },
      { from: 'Wallet44', to: 'Wallet45', amount: 105000 },
      { from: 'Exchange3', to: 'Wallet46', amount: 650000 },
      { from: 'Wallet47', to: 'Wallet48', amount: 115000 },
      { from: 'Wallet49', to: 'Exchange4', amount: 75000 },
      { from: 'Wallet50', to: 'Wallet1', amount: 85000 },
      { from: 'Exchange1', to: 'Wallet2', amount: 95000 },
      { from: 'Wallet3', to: 'Wallet4', amount: 80000 },
      { from: 'Exchange2', to: 'Wallet5', amount: 70000 },
      { from: 'Wallet6', to: 'Wallet7', amount: 100000 },
      { from: 'Wallet8', to: 'Exchange3', amount: 90000 },
      { from: 'Wallet9', to: 'Wallet10', amount: 105000 },
      { from: 'Exchange4', to: 'Wallet11', amount: 75000 },
      { from: 'Wallet12', to: 'Wallet13', amount: 120000 },
      { from: 'Wallet14', to: 'Exchange1', amount: 85000 },
      { from: 'Wallet15', to: 'Wallet16', amount: 95000 },
      { from: 'Exchange2', to: 'Wallet17', amount: 80000 },
      { from: 'Wallet18', to: 'Wallet19', amount: 110000 },
      { from: 'Wallet20', to: 'Exchange3', amount: 70000 },
      { from: 'Wallet21', to: 'Wallet22', amount: 90000 },
      { from: 'Exchange4', to: 'Wallet23', amount: 105000 },
    ];

    const formattedData: (string | number)[][] = [['From', 'To', 'Weight']];
    mockData.forEach(transaction => {
      formattedData.push([
        transaction.from,
        transaction.to,
        transaction.amount,
      ]);
    });
    const WhaleTransactionData = async () => { await fetchEthereumAnalysisData()}

   WhaleTransactionData();

    setData(formattedData);
  }, []);

  const options = {
    sankey: {
      link: { color: { fill: '#d799ae' } },
      node: {
        colors: ['green', 'red', 'grey', 'blue'],
        label: { color: '#871b47' },
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