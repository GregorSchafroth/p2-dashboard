'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import data from '@/data/analytics';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    // Extract data from payload
    const { name, uv, pv, amt } = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          padding: '10px',
        }}
      >
        <strong>{name}</strong>
        <p>Unique Visitors: {uv}</p>
        <p>Page Views: {pv}</p>
        <p>Interactions: {amt}</p>
      </div>
    );
  }
  return null;
};

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics For This Year</CardTitle>
          <CardDescription>Views per Month</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <Line type='monotone' dataKey='uv' stroke='#8884d8' name='UV' />
                <Line type='monotone' dataKey='pv' stroke='#82ca9d' name='PV' />
                <Line
                  type='monotone'
                  dataKey='amt'
                  stroke='#ffc658'
                  name='AMT'
                />
                <CartesianGrid stroke='#ccc' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsChart;
