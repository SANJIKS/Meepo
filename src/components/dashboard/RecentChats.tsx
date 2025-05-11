import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface ChatMessage {
  id: string;
  userName: string;
  userAvatar: string;
  message: string;
  time: string;
  unread: boolean;
  botName: string;
}

interface RecentChatsProps {
  chats?: ChatMessage[];
  title?: string;
  description?: string;
}

const RecentChats = ({
  chats = [
    {
      id: "1",
      userName: "Анна Смирнова",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
      message: "Здравствуйте, меня интересует ваш продукт для похудения...",
      time: "10 мин назад",
      unread: true,
      botName: "Бот Здоровье",
    },
    {
      id: "2",
      userName: "Иван Петров",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan",
      message: "Когда будет доставка моего заказа?",
      time: "25 мин назад",
      unread: true,
      botName: "Бот Доставка",
    },
    {
      id: "3",
      userName: "Мария Иванова",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      message: "Спасибо за консультацию, очень помогло!",
      time: "1 час назад",
      unread: false,
      botName: "Бот Красота",
    },
    {
      id: "4",
      userName: "Алексей Сидоров",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexey",
      message: "Можно узнать подробнее о бизнес-возможностях?",
      time: "2 часа назад",
      unread: false,
      botName: "Бот Бизнес",
    },
  ],
  title = "Последние сообщения",
  description = "Сообщения, требующие вашего внимания",
}: RecentChatsProps) => {
  return (
    <Card className="w-full h-full bg-white shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="text-sm">
            Все сообщения <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Avatar className="h-10 w-10">
                <img src={chat.userAvatar} alt={chat.userName} />
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm">{chat.userName}</h4>
                    <span className="text-xs text-muted-foreground">
                      через {chat.botName}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {chat.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">
                  {chat.message}
                </p>
              </div>
              {chat.unread && (
                <Badge
                  variant="default"
                  className="bg-blue-500 hover:bg-blue-600 rounded-full h-2 w-2 p-0"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" size="sm" className="w-full">
            <MessageCircle className="mr-2 h-4 w-4" />
            Ответить на сообщения
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentChats;
