import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { CalendarIcon, Clock, Users } from "lucide-react";
import { Button } from "../ui/button";

interface Campaign {
  id: string;
  title: string;
  date: string;
  time: string;
  audience: string;
  audienceCount: number;
  status: "scheduled" | "draft";
}

interface UpcomingCampaignsProps {
  campaigns?: Campaign[];
}

export default function UpcomingCampaigns({
  campaigns = [
    {
      id: "1",
      title: "Новогодняя акция",
      date: "25.12.2023",
      time: "12:00",
      audience: "Все клиенты",
      audienceCount: 1250,
      status: "scheduled",
    },
    {
      id: "2",
      title: "Запуск нового продукта",
      date: "15.01.2024",
      time: "10:00",
      audience: "Активные клиенты",
      audienceCount: 780,
      status: "scheduled",
    },
    {
      id: "3",
      title: "Приглашение на вебинар",
      date: "05.02.2024",
      time: "19:00",
      audience: "Новые клиенты",
      audienceCount: 320,
      status: "draft",
    },
  ],
}: UpcomingCampaignsProps) {
  return (
    <Card className="w-full h-full bg-white shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">
            Предстоящие рассылки
          </CardTitle>
          <Button variant="outline" size="sm" className="text-sm">
            Все рассылки
          </Button>
        </div>
        <CardDescription>Запланированные кампании и черновики</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="flex items-start justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{campaign.title}</h3>
                  <Badge
                    variant={
                      campaign.status === "scheduled" ? "default" : "outline"
                    }
                    className="text-xs"
                  >
                    {campaign.status === "scheduled"
                      ? "Запланирована"
                      : "Черновик"}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    <span>{campaign.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{campaign.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    <span>
                      {campaign.audience} ({campaign.audienceCount})
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                Редактировать
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
