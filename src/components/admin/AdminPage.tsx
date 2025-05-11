import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { PlusCircle, Bot, Save } from "lucide-react";

interface BotFormData {
  name: string;
  telegramApiKey: string;
  rolePrompt: string;
}

const AdminPage = () => {
  const [bots, setBots] = useState<BotFormData[]>([
    {
      name: "Продажи Бот",
      telegramApiKey: "5938475:AAHs83jdnKSjd",
      rolePrompt:
        "Ты бот-помощник по продажам. Помогаешь клиентам выбрать продукты и отвечаешь на вопросы о ценах и доставке.",
    },
    {
      name: "Поддержка Клиентов",
      telegramApiKey: "6029384:BBGj92kdnLKjd",
      rolePrompt:
        "Ты бот службы поддержки. Помогаешь решать проблемы клиентов и отвечаешь на частые вопросы.",
    },
  ]);

  const [newBot, setNewBot] = useState<BotFormData>({
    name: "",
    telegramApiKey: "",
    rolePrompt: "",
  });

  const [isCreating, setIsCreating] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setNewBot((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateBot = () => {
    if (!newBot.name || !newBot.telegramApiKey || !newBot.rolePrompt) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    setBots((prev) => [...prev, newBot]);
    setNewBot({
      name: "",
      telegramApiKey: "",
      rolePrompt: "",
    });
    setIsCreating(false);
  };

  const handleConnect = (index: number) => {
    alert(`Бот ${bots[index].name} успешно подключен к Telegram!`);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Панель администратора</h1>
        <Button onClick={() => setIsCreating(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Создать нового бота
        </Button>
      </div>

      {isCreating && (
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle>Создание нового бота</CardTitle>
            <CardDescription>
              Заполните все поля для создания нового Telegram бота
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя бота</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Например: Бот для продаж"
                  value={newBot.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegramApiKey">Telegram API ключ</Label>
                <Input
                  id="telegramApiKey"
                  name="telegramApiKey"
                  placeholder="Например: 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  value={newBot.telegramApiKey}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rolePrompt">Ролевой промпт</Label>
                <Textarea
                  id="rolePrompt"
                  name="rolePrompt"
                  placeholder="Опишите роль и поведение бота..."
                  className="min-h-[120px]"
                  value={newBot.rolePrompt}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setIsCreating(false)}>
              Отмена
            </Button>
            <Button onClick={handleCreateBot}>Создать бота</Button>
          </CardFooter>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bots.map((bot, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-muted/30">
              <div className="flex items-center">
                <Bot className="h-5 w-5 mr-2 text-primary" />
                <CardTitle>{bot.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <Label className="text-sm text-muted-foreground">
                  API ключ
                </Label>
                <div className="mt-1 font-mono text-sm bg-muted p-2 rounded-md truncate">
                  {bot.telegramApiKey}
                </div>
              </div>

              <div>
                <Label className="text-sm text-muted-foreground">
                  Ролевой промпт
                </Label>
                <div className="mt-1 text-sm bg-muted p-2 rounded-md h-20 overflow-y-auto">
                  {bot.rolePrompt}
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-between py-4">
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Редактировать
              </Button>
              <Button size="sm" onClick={() => handleConnect(index)}>
                Подключить
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
