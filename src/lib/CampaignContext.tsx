"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Campaign {
  title: string;
  description: string;
  audience: string;
  startDate: string;
  endDate: string;
}

interface CampaignContextType {
  campaign: Campaign;
  setCampaign: React.Dispatch<React.SetStateAction<Campaign>>;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [campaign, setCampaign] = useState<Campaign>({
    title: "",
    description: "",
    audience: "",
    startDate: "",
    endDate: "",
  });

  return (
    <CampaignContext.Provider value={{ campaign, setCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
}

export function useCampaign() {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error("useCampaign must be used within a CampaignProvider");
  }
  return context;
}
