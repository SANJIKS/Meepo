import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Copy, Link as LinkIcon } from "lucide-react";

interface ReferralLink {
  id: string;
  botId: string;
  referralLink: string;
  generatedLink: string;
  createdAt: Date;
}

export default function ReferralLinks() {
  const [botId, setBotId] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [referralLinks, setReferralLinks] = useState<ReferralLink[]>([]);

  const generateLink = () => {
    if (!botId || !referralLink) return;

    const newLink = {
      id: Date.now().toString(),
      botId,
      referralLink,
      generatedLink: `https://t.me/${botId}?start=ref_${btoa(referralLink)}`,
      createdAt: new Date(),
    };

    setReferralLinks([newLink, ...referralLinks]);
    setGeneratedLink(newLink.generatedLink);
    // Reset form
    setBotId("");
    setReferralLink("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto py-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">
        Управление реферальными ссылками
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Создать реферальную ссылку</CardTitle>
            <CardDescription>
              Заполните поля для генерации новой реферальной ссылки
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="botId">ID бота</Label>
              <Input
                id="botId"
                placeholder="Введите ID бота"
                value={botId}
                onChange={(e) => setBotId(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="referralLink">Ваша реферальная ссылка</Label>
              <Input
                id="referralLink"
                placeholder="Введите вашу реферальную ссылку"
                value={referralLink}
                onChange={(e) => setReferralLink(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={generateLink}
              disabled={!botId || !referralLink}
              className="w-full"
            >
              Сгенерировать ссылку
            </Button>
          </CardFooter>
        </Card>

        {generatedLink && (
          <Card>
            <CardHeader>
              <CardTitle>Сгенерированная ссылка</CardTitle>
              <CardDescription>
                Используйте эту ссылку для привлечения пользователей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-muted rounded-md flex items-center justify-between">
                <p className="text-sm break-all mr-2">{generatedLink}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(generatedLink)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {referralLinks.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">История ссылок</h2>
          <div className="grid gap-4">
            {referralLinks.map((link) => (
              <Card key={link.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Бот: {link.botId}</p>
                      <p className="text-sm text-muted-foreground">
                        Создано: {link.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(link.generatedLink)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Копировать
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-muted rounded-md flex items-center">
                    <LinkIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p className="text-sm break-all">{link.generatedLink}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
