"use client";

import React from "react";
import Button from "@/components/Button";
import { useCampaign } from "@/lib/CampaignContext";
import { useRouter } from "next/navigation";
import StepProgress from "@/components/StepProgress";

export default function Step3() {
  const router = useRouter();
  const { campaign, setCampaign } = useCampaign();

  const isNextDisabled =
    !campaign.audience || !campaign.startDate || !campaign.endDate;

  return (
    <div className="p-4 sm:p-8 max-w-md sm:max-w-xl mx-auto">
      <StepProgress currentStep={3} totalSteps={4} />

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Step 3: Configure Campaign</h1>

      <div className="space-y-4">
        <label className="block">
          Audience:
          <select
            value={campaign.audience}
            onChange={(e) =>
              setCampaign({ ...campaign, audience: e.target.value })
            }
            className="border p-2 w-full rounded mt-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-colors duration-200"
          >
            <option value="">Select audience</option>
            <option>All Users</option>
            <option>New Users</option>
            <option>Returning Users</option>
          </select>
          {!campaign.audience && (
            <p className="text-red-500 text-sm mt-1">Audience is required</p>
          )}
        </label>

        <label className="block">
          Start Date:
          <input
            type="date"
            value={campaign.startDate}
            onChange={(e) =>
              setCampaign({ ...campaign, startDate: e.target.value })
            }
            className="border p-2 w-full rounded mt-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-colors duration-200"
          />
          {!campaign.startDate && (
            <p className="text-red-500 text-sm mt-1">Start date is required</p>
          )}
        </label>

        <label className="block">
          End Date:
          <input
            type="date"
            value={campaign.endDate}
            onChange={(e) =>
              setCampaign({ ...campaign, endDate: e.target.value })
            }
            className="border p-2 w-full rounded mt-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-colors duration-200"
          />
          {!campaign.endDate && (
            <p className="text-red-500 text-sm mt-1">End date is required</p>
          )}
        </label>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-6 gap-2">
        <Button onClick={() => router.push("/campaign/step2")}>Back</Button>
        <Button
          onClick={() => router.push("/campaign/step4")}
          disabled={isNextDisabled}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
