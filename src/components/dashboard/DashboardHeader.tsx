import React from "react";
import { Bell, Search, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "../../lib/utils";

interface DashboardHeaderProps {
  title?: string;
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
}

const DashboardHeader = ({
  title = "Панель управления",
  userName = "Иван Петров",
  userAvatar = "",
  notificationCount = 3,
}: DashboardHeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between w-full h-20">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>

      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Поиск..."
            className="pl-8 h-9 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              {notificationCount > 0 && (
                <Badge
                  className={cn(
                    "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center",
                    "bg-red-500 text-white text-xs rounded-full",
                  )}
                >
                  {notificationCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>Уведомления</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <span className="font-medium">Новый клиент</span>
                <span className="text-xs text-gray-500">
                  Пользователь начал чат с ботом
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <span className="font-medium">Рассылка завершена</span>
                <span className="text-xs text-gray-500">
                  Открыто: 45%, Конверсия: 12%
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <span className="font-medium">Пополнение баланса</span>
                <span className="text-xs text-gray-500">
                  Успешно зачислено 1000 ₽
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-blue-600">
              Все уведомления
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 h-9 px-2"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={userAvatar} alt={userName} />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {userName
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{userName}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Профиль</span>
            </DropdownMenuItem>
            <DropdownMenuItem>Настройки</DropdownMenuItem>
            <DropdownMenuItem>Подписка</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Выйти</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
