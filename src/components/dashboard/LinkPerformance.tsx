import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface LinkPerformanceProps {
  data?: {
    date: string;
    clicks: number;
    conversions: number;
  }[];
  title?: string;
  period?: string;
}

const LinkPerformance = ({
  data = [
    { date: "01.05", clicks: 45, conversions: 5 },
    { date: "02.05", clicks: 52, conversions: 8 },
    { date: "03.05", clicks: 48, conversions: 7 },
    { date: "04.05", clicks: 61, conversions: 10 },
    { date: "05.05", clicks: 55, conversions: 9 },
    { date: "06.05", clicks: 67, conversions: 12 },
    { date: "07.05", clicks: 70, conversions: 14 },
  ],
  title = "Эффективность реферальных ссылок",
  period = "За последние 7 дней",
}: LinkPerformanceProps) => {
  return (
    <Card className="w-full h-full bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex justify-between items-center">
          <span>{title}</span>
          <span className="text-sm text-muted-foreground font-normal">
            {period}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[230px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                opacity={0.3}
              />
              <XAxis dataKey="date" fontSize={12} tickMargin={10} />
              <YAxis fontSize={12} tickMargin={10} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend verticalAlign="top" height={36} />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Клики"
              />
              <Line
                type="monotone"
                dataKey="conversions"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Конверсии"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkPerformance;
