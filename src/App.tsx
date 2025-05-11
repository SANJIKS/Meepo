import React, { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import LandingPage from "./components/landing/LandingPage";
import LoginPage from "./components/auth/LoginPage";
import ReferralLinks from "./components/referrals/ReferralLinks";
import CampaignsList from "./components/campaigns/CampaignsList";
import AdminPage from "./components/admin/AdminPage";
import RegisterPage from "./components/auth/RegisterPage";

const CampaignCreate = lazy(
  () => import("./components/campaigns/CampaignCreate"),
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {/* Tempo routes for storyboards */}
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/referrals" element={<ReferralLinks />} />
          <Route path="/campaigns" element={<CampaignsList />} />
          <Route path="/campaigns/create" element={<CampaignCreate />} />
          <Route path="/bots" element={<Home />} />
          <Route path="/chats" element={<Home />} />
          <Route path="/balance" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />

          {/* Add this before the catchall route for Tempo */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}

          {/* Redirect any other routes to landing page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
