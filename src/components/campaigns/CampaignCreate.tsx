import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, Clock, Send } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";
import Sidebar from "../layout/Sidebar";
import { useNavigate } from "react-router";
import { toast, Toaster } from "react-hot-toast";

export default function CampaignCreate() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("12:00");
  const [audience, setAudience] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь ваш API-запрос или логика создания рассылки
    console.log({
      name,
      audience,
      message,
      scheduledDate: date,
      scheduledTime: time,
    });

    toast.success("Рассылка успешно создана!");
    // navigate("/campaigns", { replace: true });
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
      <Toaster position="top-right" />
      <div className="container mx-auto py-6 bg-background">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Создание рассылки</h1>
          <Button variant="outline" onClick={() => window.history.back()}>
            Назад к списку
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Новая рассылка</CardTitle>
            <CardDescription>
              Создайте новую рассылку для ваших подписчиков
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Название рассылки</Label>
                <Input
                  id="name"
                  placeholder="Введите название рассылки"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Аудитория</Label>
                <Select value={audience} onValueChange={setAudience} required>
                  <SelectTrigger id="audience">
                    <SelectValue placeholder="Выберите аудиторию" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все подписчики</SelectItem>
                    <SelectItem value="active">Активные пользователи</SelectItem>
                    <SelectItem value="inactive">
                      Неактивные пользователи
                    </SelectItem>
                    <SelectItem value="new">Новые пользователи</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Текст сообщения</Label>
                <Textarea
                  id="message"
                  placeholder="Введите текст сообщения"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Дата отправки</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, "PPP", { locale: ru })
                        ) : (
                          <span>Выберите дату</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Время отправки</Label>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit">
                  <Send className="mr-2 h-4 w-4" /> Создать рассылку
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
