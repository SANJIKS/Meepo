import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Settings,
  Users,
  Activity,
  ExternalLink,
  Plus,
} from "lucide-react";

interface BotStats {
  clients: number;
  messages: number;
  status: "active" | "inactive" | "pending";
}

interface Bot {
  id: string;
  name: string;
  description: string;
  avatar: string;
  stats: BotStats;
}

interface BotsListProps {
  bot?: Bot | null;
  onCreateBot?: () => void;
  onManageBot?: () => void;
}

const BotsList = ({
  bot = null,
  onCreateBot = () => console.log("Create bot"),
  onManageBot = () => console.log("Manage bot"),
}: BotsListProps) => {
  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Ваш бот</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {bot ? (
          <div className="p-4 hover:bg-slate-50">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <img
                  src={bot.avatar}
                  alt={bot.name}
                  className="w-10 h-10 rounded-full bg-slate-100"
                />
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-sm">{bot.name}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${bot.stats.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                  >
                    {bot.stats.status === "active" ? "Активен" : "Неактивен"}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5 truncate">
                  {bot.description}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="h-3 w-3" />
                    <span>{bot.stats.clients}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MessageCircle className="h-3 w-3" />
                    <span>{bot.stats.messages}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Activity className="h-3 w-3" />
                    <span>23%</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0 h-8 w-8"
                onClick={onManageBot}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="font-medium text-base mb-2">У вас пока нет бота</h3>
            <p className="text-sm text-slate-500 mb-4 max-w-xs">
              Создайте своего первого бота для автоматизации общения с клиентами
              в Telegram
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        {bot ? (
          <Button className="w-full" variant="outline" onClick={onManageBot}>
            <Settings className="h-4 w-4 mr-2" />
            Настроить бота
          </Button>
        ) : (
          <Button className="w-full" onClick={onCreateBot}>
            <Plus className="h-4 w-4 mr-2" />
            Создать бота
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BotsList;
