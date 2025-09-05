"use client";

import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useCampaign } from "@/lib/CampaignContext";
import { useRouter } from "next/navigation";
import StepProgress from "@/components/StepProgress";

export default function Step2() {
  const router = useRouter();
  const { campaign, setCampaign } = useCampaign();

  const isNextDisabled = !campaign.title.trim() || !campaign.description.trim();

  return (
    <div className="p-4 sm:p-8 max-w-md sm:max-w-xl mx-auto">
      <StepProgress currentStep={2} totalSteps={4} />

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Step 2: Edit Campaign</h1>

      <div className="space-y-4">
        <div>
          <Input
            placeholder="Campaign Title"
            value={campaign.title}
            onChange={(e) =>
              setCampaign({ ...campaign, title: e.target.value })
            }
            className="w-full"
          />
          {!campaign.title.trim() && (
            <p className="text-red-500 text-sm mt-1">Title is required</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Campaign Description"
            value={campaign.description}
            onChange={(e) =>
              setCampaign({ ...campaign, description: e.target.value })
            }
            className="w-full"
          />
          {!campaign.description.trim() && (
            <p className="text-red-500 text-sm mt-1">Description is required</p>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-6 gap-2">
        <Button onClick={() => router.push("/campaign/step1")}>Back</Button>
        <Button
          onClick={() => router.push("/campaign/step3")}
          disabled={isNextDisabled}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
