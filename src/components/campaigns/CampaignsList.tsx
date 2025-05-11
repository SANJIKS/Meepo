import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Calendar, Clock, Edit, Plus, Send, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import Sidebar from "../layout/Sidebar";

interface Campaign {
  id: string;
  name: string;
  status: "scheduled" | "sent" | "draft";
  audience: string;
  scheduledDate?: Date;
  sentDate?: Date;
  stats?: {
    sent: number;
    opened: number;
    clicked: number;
  };
}

export default function CampaignsList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: "1",
      name: "Приветственная рассылка",
      status: "sent",
      audience: "Все подписчики",
      sentDate: new Date(2023, 5, 15),
      stats: {
        sent: 250,
        opened: 180,
        clicked: 75,
      },
    },
    {
      id: "2",
      name: "Анонс нового продукта",
      status: "scheduled",
      audience: "Активные пользователи",
      scheduledDate: new Date(2023, 6, 10),
    },
    {
      id: "3",
      name: "Специальное предложение",
      status: "draft",
      audience: "Неактивные пользователи",
    },
  ]);

  const getStatusBadge = (status: Campaign["status"]) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            Запланирована
          </Badge>
        );
      case "sent":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            Отправлена
          </Badge>
        );
      case "draft":
        return (
          <Badge
            variant="outline"
            className="bg-gray-50 text-gray-700 border-gray-200"
          >
            Черновик
          </Badge>
        );
    }
  };

  const deleteCampaign = (id: string) => {
    setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
  };

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar
          activeSection="campaigns"
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleToggleSidebar}
        />
      <div className="container mx-auto py-6 bg-background">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Управление рассылками</h1>
          <Button onClick={() => (window.location.href = "/campaigns/create")}>
            <Plus className="mr-2 h-4 w-4" /> Создать рассылку
          </Button>
        </div>

        <div className="grid gap-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{campaign.name}</h3>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <span>Аудитория: {campaign.audience}</span>
                    </div>
                    <div className="mt-2">{getStatusBadge(campaign.status)}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" /> Изменить
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive"
                      onClick={() => deleteCampaign(campaign.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Удалить
                    </Button>
                  </div>
                </div>

                {campaign.status === "scheduled" && campaign.scheduledDate && (
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      Запланирована на:{" "}
                      {campaign.scheduledDate.toLocaleDateString("ru-RU")}
                    </span>
                    <Clock className="h-4 w-4 ml-4 mr-1" />
                    <span>
                      {campaign.scheduledDate.toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                )}

                {campaign.status === "sent" && campaign.stats && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-muted rounded-md p-3">
                      <div className="text-sm font-medium">Отправлено</div>
                      <div className="text-2xl font-bold mt-1">
                        {campaign.stats.sent}
                      </div>
                    </div>
                    <div className="bg-muted rounded-md p-3">
                      <div className="text-sm font-medium">Открыто</div>
                      <div className="text-2xl font-bold mt-1">
                        {campaign.stats.opened}{" "}
                        <span className="text-sm text-muted-foreground">
                          (
                          {Math.round(
                            (campaign.stats.opened / campaign.stats.sent) * 100,
                          )}
                          %)
                        </span>
                      </div>
                    </div>
                    <div className="bg-muted rounded-md p-3">
                      <div className="text-sm font-medium">Переходы</div>
                      <div className="text-2xl font-bold mt-1">
                        {campaign.stats.clicked}{" "}
                        <span className="text-sm text-muted-foreground">
                          (
                          {Math.round(
                            (campaign.stats.clicked / campaign.stats.sent) * 100,
                          )}
                          %)
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {campaign.status === "draft" && (
                  <div className="mt-4">
                    <Button>
                      <Send className="mr-2 h-4 w-4" /> Продолжить создание
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
