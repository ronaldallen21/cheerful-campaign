export interface Campaign {
  id: number;
  title: string;
  description: string;
  status: "draft" | "active" | "completed";
  startDate: string;
  endDate: string;
}

export const mockCampaigns: Campaign[] = [
  {
    id: 1,
    title: "Summer Sale Campaign",
    description: "Promote summer deals for new users",
    status: "draft",
    startDate: "2025-09-10",
    endDate: "2025-09-30"
  },
  {
    id: 2,
    title: "Back to School",
    description: "Target students with special offers",
    status: "active",
    startDate: "2025-09-01",
    endDate: "2025-09-15"
  }
];
