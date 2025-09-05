"use client";

import React from "react";
import Button from "@/components/Button";
import { useCampaign } from "@/lib/CampaignContext";
import { useRouter } from "next/navigation";
import StepProgress from "@/components/StepProgress";

export default function Step4() {
  const router = useRouter();
  const { campaign } = useCampaign();

  const handleSubmit = () => {
    alert("Campaign submitted!");
    router.push("/campaign/step1"); // Reset to start
  };

  return (
    <div className="p-4 sm:p-8 max-w-md sm:max-w-xl mx-auto">
      <StepProgress currentStep={4} totalSteps={4} />

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Step 4: Review & Submit</h1>

      <div className="border rounded p-4 space-y-2 bg-white shadow-md">
        <p><strong>Title:</strong> {campaign.title}</p>
        <p><strong>Description:</strong> {campaign.description}</p>
        <p><strong>Audience:</strong> {campaign.audience}</p>
        <p><strong>Start Date:</strong> {campaign.startDate}</p>
        <p><strong>End Date:</strong> {campaign.endDate}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-6 gap-2">
        <Button onClick={() => router.push("/campaign/step3")}>Back</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}
