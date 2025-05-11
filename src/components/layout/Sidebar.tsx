import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Bot,
  Link2,
  Send,
  MessageSquare,
  Wallet,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface SidebarProps {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  activeSection?: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const Sidebar = ({
  userName = "Иван Петров",
  userEmail = "alex@example.com",
  userAvatar = "",
  activeSection = "dashboard",
  collapsed = false,
  onToggleCollapse = () => {},
}: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Главная", icon: <Home size={20} />, path: "/" },
    { id: "bots", label: "Мои боты", icon: <Bot size={20} />, path: "/bots" },
    {
      id: "links",
      label: "Ссылки",
      icon: <Link2 size={20} />,
      path: "/referrals",
    },
    {
      id: "campaigns",
      label: "Рассылки",
      icon: <Send size={20} />,
      path: "/campaigns",
    },
    {
      id: "chats",
      label: "Переписки",
      icon: <MessageSquare size={20} />,
      path: "/chats",
    },
    {
      id: "balance",
      label: "Баланс",
      icon: <Wallet size={20} />,
      path: "/balance",
    },
    {
      id: "admin",
      label: "Администратор",
      icon: <Settings size={20} />,
      path: "/admin",
    },
  ];

  return (
    <div
      className={`h-full bg-background border-r flex flex-col transition-all duration-300 ${collapsed ? "w-20" : "w-[280px]"}`}
    >
      <div className="p-4 flex items-center justify-between">
        <div
          className={`flex items-center ${collapsed ? "justify-center w-full" : ""}`}
        >
          {!collapsed && (
            <span className="text-xl font-bold ml-2 text-primary">Морфиус</span>
          )}
          {collapsed && (
            <span className="text-xl font-bold text-primary">М</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className={collapsed ? "hidden" : ""}
        >
          <ChevronRight size={18} />
        </Button>
      </div>

      <Separator />

      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => (
            <TooltipProvider
              key={item.id}
              delayDuration={collapsed ? 100 : 1000}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                      ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }
                      ${collapsed ? "justify-center" : ""}`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    {!collapsed && <span className="ml-3">{item.label}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">{item.label}</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
      </div>

      <Separator />

      <div className="p-4">
        {!collapsed ? (
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback>{userName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{userName}</p>
              <p className="text-xs text-muted-foreground truncate">
                {userEmail}
              </p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Настройки</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <LogOut size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Выйти</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar>
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>{userName.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent side="right">{userName}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Настройки</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <LogOut size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Выйти</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
