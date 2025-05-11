import React, { useState } from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import StatisticsOverview from "./dashboard/StatisticsOverview";
import BotsList from "./dashboard/BotsList";
import RecentChats from "./dashboard/RecentChats";
import LinkPerformance from "./dashboard/LinkPerformance";
import UpcomingCampaigns from "./dashboard/UpcomingCampaigns";
import Sidebar from "./layout/Sidebar";

const Home = () => {
  // State for the user's bot (null means they don't have one yet)
  const [userBot, setUserBot] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Handlers for bot actions
  const handleCreateBot = () => {
    // This would typically open a modal or navigate to a bot creation page
    // For demo purposes, we'll just create a bot directly
    setUserBot({
      id: "1",
      name: "Консультант по продуктам",
      description: "Отвечает на вопросы о продуктах и помогает с выбором",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bot1",
      stats: {
        clients: 0,
        messages: 0,
        status: "active",
      },
    });
  };

  const handleManageBot = () => {
    // This would typically open a modal or navigate to a bot management page
    console.log("Managing bot");
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar
        activeSection="dashboard"
        collapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        <div className="flex-1 overflow-auto p-6 space-y-6">
          <StatisticsOverview />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BotsList
              bot={userBot}
              onCreateBot={handleCreateBot}
              onManageBot={handleManageBot}
            />
            <RecentChats />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LinkPerformance />
            <UpcomingCampaigns />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
