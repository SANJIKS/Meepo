import React, { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import LandingPage from "./components/landing/LandingPage";
import LoginPage from "./components/auth/LoginPage";
import ReferralLinks from "./components/referrals/ReferralLinks";
import CampaignsList from "./components/campaigns/CampaignsList";
import AdminPage from "./components/admin/AdminPage";
import RegisterPage from "./components/auth/RegisterPage";
import { Chat } from "./components/chat/Chat";
import CampaignCreate from "./components/campaigns/CampaignCreate";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/referrals" element={<ReferralLinks />} />
          <Route path="/campaigns" element={<CampaignsList />} />
          <Route path="/campaigns-create" element={<CampaignCreate />} />
          <Route path="/bots" element={<Home />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/balance" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;