import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Морфиус</h1>
          <span className="ml-2 text-blue-400 text-sm">beta</span>
        </div>
        <Button
          asChild
          variant="outline"
          className="bg-slate-800 hover:bg-slate-900 text-white px-8"
        >
          <Link to="/login">Войти</Link>
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Автоматизируйте общение с клиентами
          <span className="text-blue-400"> с помощью ИИ</span>
        </h1>
        <p className="text-slate-300 text-xl max-w-3xl mb-8">
          Платформа для сетевиков с ИИ-ботами в Telegram, которая поможет вам
          автоматизировать общение с клиентами, настраивать рассылки и
          монетизировать реферальные ссылки.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-slate-800 hover:bg-slate-900 text-white px-8"
          >
            <Link to="/dashboard">
              Войти в личный кабинет <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-slate-700 text-white hover:bg-slate-800 border border-slate-600"
          >
            <Link to="/register">Зарегистрироваться</Link>
          </Button>
        </div>
      </main>


      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              ИИ-боты в Telegram
            </h3>
            <p className="text-slate-300">
              Автоматизируйте общение с клиентами с помощью ботов на базе
              искусственного интеллекта.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Умные рассылки
            </h3>
            <p className="text-slate-300">
              Создавайте и настраивайте рассылки с таргетированием на нужную
              аудиторию.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Реферальные ссылки
            </h3>
            <p className="text-slate-300">
              Монетизируйте свою аудиторию с помощью реферальных ссылок и
              отслеживайте статистику.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2024 Морфиус. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
