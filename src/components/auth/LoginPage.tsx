import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <h1 className="text-2xl font-bold text-slate-800">Морфиус</h1>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Вход в личный кабинет
          </CardTitle>
          <CardDescription className="text-center">
            Введите ваши данные для входа в систему
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@mail.ru" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Пароль</Label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                Забыли пароль?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button asChild className="w-full">
            <Link to="/dashboard">Войти</Link>
          </Button>
          <div className="text-center text-sm">
            Нет аккаунта?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Зарегистрироваться
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
