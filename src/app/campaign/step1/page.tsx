"use client";

import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

interface Campaign {
  id: number;
  title: string;
  description: string;
}

const mockCampaigns: Campaign[] = [
  { id: 1, title: "Spring Sale", description: "Discounts for all users" },
  { id: 2, title: "New User Welcome", description: "Special offer for new users" },
  { id: 3, title: "Summer Promo", description: "Limited-time summer deals" },
];

export default function Step1() {
  const router = useRouter();

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Step 1: Select or Create Campaign</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        {mockCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border rounded p-4 bg-white shadow hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => router.push("/campaign/step2")}
          >
            <h2 className="font-semibold text-lg">{campaign.title}</h2>
            <p className="text-gray-600 mt-2">{campaign.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button onClick={() => router.push("/campaign/step2")}>Create New Campaign</Button>
      </div>
    </div>
  );
}
