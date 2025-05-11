import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { Users, Wallet } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon,
  trend,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div
            className={cn(
              "text-xs mt-2 flex items-center",
              trend.isPositive ? "text-green-500" : "text-red-500",
            )}
          >
            {trend.isPositive ? "+" : "-"}
            {Math.abs(trend.value)}%
            <span className="text-muted-foreground ml-1">
              с прошлого месяца
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface StatisticsOverviewProps {
  totalClients?: number;
  currentBalance?: number;
  className?: string;
}

const StatisticsOverview = ({
  totalClients = 127,
  currentBalance = 15600,
  className,
}: StatisticsOverviewProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
      <StatCard
        title="Клиенты"
        value={`${totalClients}`}
        description="Общее количество"
        icon={<Users className="h-4 w-4" />}
        trend={{ value: 8.3, isPositive: true }}
      />
      <StatCard
        title="Баланс"
        value={`${currentBalance.toLocaleString()} ₽`}
        description="Доступно для использования"
        icon={<Wallet className="h-4 w-4" />}
        trend={{ value: 4.5, isPositive: true }}
      />
    </div>
  );
};

export default StatisticsOverview;
