import React from "react";
import SourceStatsCard from "@/features/analytics/components/SourceStatsCard";
import ServiceStatsCard from "@/features/analytics/components/ServiceStatsCard";
import CampaignStatsCard from "@/features/analytics/components/CampaignStatsCard";

// 🆕 ROI COMPONENTS (NEW LAYER)
import ServiceProfitCard from "@/features/analytics/components/roi/ServiceProfitCard";
import SourceROICard from "@/features/analytics/components/roi/SourceROICard";
import CampaignProfitTable from "@/features/analytics/components/roi/CampaignProfitTable";

import { useAnalytics } from "@/features/analytics/hooks/useAnalytics";

const Analytics: React.FC = () => {
  const { loading, totalLeads, googleAdsROI, googleAdsConversionRate } =
    useAnalytics();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-500">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <p className="text-sm text-gray-500">
          Track leads, campaigns, and performance insights
        </p>
      </div>

      {/* KPI ROW (UNCHANGED) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-xs text-gray-500">Total Leads</p>
          <p className="text-2xl font-bold">{totalLeads}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-xs text-gray-500">Google Ads Conversion</p>
          <p className="text-2xl font-bold">
            {googleAdsConversionRate.toFixed(1)}%
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-xs text-gray-500">Google Ads ROI</p>
          <p className="text-2xl font-bold">{googleAdsROI.toFixed(1)}%</p>
        </div>
      </div>

      {/* CHART SECTION (UNCHANGED) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SourceStatsCard />
        <ServiceStatsCard />
        <CampaignStatsCard />
      </div>

      {/* 🆕 ROI INTELLIGENCE LAYER (NEW SECTION) */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">ROI Intelligence</h2>

        {/* INSIGHT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <ServiceProfitCard />
          <SourceROICard />
        </div>

        {/* FULL PROFIT TABLE */}
        <div className="bg-white rounded-xl shadow p-4">
          <CampaignProfitTable />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
