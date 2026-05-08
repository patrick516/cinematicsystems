import React from "react";
import {
  Globe,
  Wrench,
  Target,
  Trophy,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { useAnalytics } from "@/features/analytics/hooks/useAnalytics";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6"];

// ─────────────────────────────────────────
// CHART CARDS (receive data as props — no extra API calls)
// ─────────────────────────────────────────

const SourceStatsCard: React.FC<{ data: any[]; topSource: any }> = ({
  data,
  topSource,
}) => (
  <div className="bg-white rounded-xl p-4 shadow">
    <div className="flex items-center gap-2 mb-3">
      <Globe size={18} />
      <h3 className="font-semibold">Traffic Sources</h3>
    </div>
    <div className="mb-4">
      <p className="text-xs text-gray-500">Top Source</p>
      <p className="font-bold">{topSource.name || "—"}</p>
      <p className="text-xs text-gray-400">{topSource.count} leads</p>
    </div>
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            label
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const ServiceStatsCard: React.FC<{ data: any[]; topService: any }> = ({
  data,
  topService,
}) => (
  <div className="bg-white rounded-xl p-4 shadow">
    <div className="flex items-center gap-2 mb-3">
      <Wrench size={18} />
      <h3 className="font-semibold">Service Performance</h3>
    </div>
    <div className="mb-4">
      <p className="text-xs text-gray-500">Top Performing Service</p>
      <p className="font-bold">{topService.name || "—"}</p>
      <p className="text-xs text-gray-400">{topService.count} leads</p>
    </div>
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const CampaignStatsCard: React.FC<{ data: any[]; topCampaign: any }> = ({
  data,
  topCampaign,
}) => (
  <div className="bg-white rounded-xl p-4 shadow">
    <div className="flex items-center gap-2 mb-3">
      <Target size={18} />
      <h3 className="font-semibold">Campaign Performance</h3>
    </div>
    <div className="mb-4">
      <p className="text-xs text-gray-500">Top Campaign</p>
      <p className="font-bold">{topCampaign.name || "—"}</p>
      <p className="text-xs text-gray-400">
        {topCampaign.count} leads generated
      </p>
    </div>
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#7c3aed" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// ─────────────────────────────────────────
// ROI CARDS
// ─────────────────────────────────────────

const BestCampaignCard: React.FC<{ bestCampaign: any }> = ({
  bestCampaign,
}) => (
  <div className="bg-white rounded-xl p-4 shadow border-l-4 border-green-500">
    <div className="flex items-center gap-2 mb-2">
      <Trophy className="text-yellow-500" size={18} />
      <h3 className="font-semibold">Best Campaign</h3>
    </div>
    <p className="text-sm text-gray-500">Top performing campaign</p>
    <p className="text-xl font-bold mt-2">
      {bestCampaign.name || "No data yet"}
    </p>
    <p className="text-sm text-green-600 font-semibold mt-1">
      Profit: MK {bestCampaign.profit.toFixed(2)}
    </p>
  </div>
);

const ServiceProfitCard: React.FC<{ serviceProfitStats: any }> = ({
  serviceProfitStats,
}) => {
  const sorted = Object.entries(serviceProfitStats)
    .map(([name, stats]: any) => ({ name, ...stats }))
    .sort((a, b) => b.profit - a.profit);
  const top = sorted[0];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center gap-2 mb-3">
        <Wrench size={18} />
        <h3 className="font-semibold">Service Profit Analysis</h3>
      </div>
      {top && (
        <div className="mb-4 p-3 rounded-lg bg-gray-50">
          <p className="text-xs text-gray-500">Most Profitable Service</p>
          <p className="text-lg font-bold">{top.name}</p>
          <p className="text-sm text-green-600 font-semibold">
            Profit: MK {top.profit.toFixed(2)}
          </p>
        </div>
      )}
      <div className="space-y-2">
        {sorted.map((item, i) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-500" : "bg-gray-300"}`}
              />
              <p className="text-sm font-medium">{item.name || "Unknown"}</p>
            </div>
            <p
              className={`text-sm font-semibold ${item.profit >= 0 ? "text-green-600" : "text-red-500"}`}
            >
              MK {item.profit.toFixed(2)}
            </p>
          </div>
        ))}
        {sorted.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-4">
            No service data available
          </p>
        )}
      </div>
    </div>
  );
};

const SourceROICard: React.FC<{ sourceROI: any }> = ({ sourceROI }) => {
  const sorted = Object.entries(sourceROI)
    .map(([name, stats]: any) => ({ name, ...stats }))
    .sort((a, b) => b.roi - a.roi);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center gap-2 mb-3">
        <Globe size={18} />
        <h3 className="font-semibold">Traffic Source ROI</h3>
      </div>
      {sorted[0] && (
        <div className="mb-4 p-3 rounded-lg bg-gray-50">
          <p className="text-xs text-gray-500">Best Performing Source</p>
          <p className="text-lg font-bold">{sorted[0].name}</p>
          <p className="text-sm text-green-600 font-semibold">
            ROI: {sorted[0].roi.toFixed(1)}%
          </p>
        </div>
      )}
      <div className="space-y-2">
        {sorted.map((item, i) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-500" : "bg-gray-300"}`}
              />
              <p className="text-sm font-medium">{item.name || "Unknown"}</p>
            </div>
            <p
              className={`text-sm font-semibold ${item.roi >= 0 ? "text-green-600" : "text-red-500"}`}
            >
              {item.roi.toFixed(1)}%
            </p>
          </div>
        ))}
        {sorted.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-4">
            No source data available
          </p>
        )}
      </div>
    </div>
  );
};

const CampaignProfitTable: React.FC<{ campaignStats: any }> = ({
  campaignStats,
}) => {
  const sorted = Object.entries(campaignStats)
    .map(([name, stats]: any) => ({ name, ...stats }))
    .sort((a, b) => b.profit - a.profit);

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 size={18} />
        <h3 className="font-semibold">Campaign Profit Breakdown</h3>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
          <tr>
            <th className="px-5 py-3 text-left">Campaign</th>
            <th className="px-5 py-3 text-left">Leads</th>
            <th className="px-5 py-3 text-left">Cost (MK)</th>
            <th className="px-5 py-3 text-left">Revenue (MK)</th>
            <th className="px-5 py-3 text-left">Profit (MK)</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item, i) => (
            <tr
              key={item.name}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-5 py-3 font-medium">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-500" : "bg-gray-300"}`}
                  />
                  {item.name || "Unknown"}
                </div>
              </td>
              <td className="px-5 py-3">{item.leads}</td>
              <td className="px-5 py-3 text-red-500">{item.cost.toFixed(2)}</td>
              <td className="px-5 py-3 text-blue-500">
                {item.revenue.toFixed(2)}
              </td>
              <td
                className={`px-5 py-3 font-semibold ${item.profit >= 0 ? "text-green-600" : "text-red-500"}`}
              >
                {item.profit.toFixed(2)}
              </td>
            </tr>
          ))}
          {sorted.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-10 text-gray-400">
                No campaign data yet — leads will appear here after form
                submissions
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// ─────────────────────────────────────────
// MAIN PAGE — single useAnalytics call
// ─────────────────────────────────────────

const Analytics: React.FC = () => {
  const {
    loading,
    totalLeads,
    googleAdsROI,
    googleAdsConversionRate,
    googleAdsLeads,
    googleAdsCost,
    googleAdsRevenue,
    sourceChartData,
    serviceChartData,
    campaignChartData,
    topSource,
    topService,
    topCampaign,
    bestCampaign,
    serviceProfitStats,
    sourceROI,
    campaignStats,
  } = useAnalytics();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
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

      {/* KPI ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-xs text-gray-500">Total Leads</p>
          <p className="text-2xl font-bold">{totalLeads}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-xs text-gray-500">Google Ads Leads</p>
          <p className="text-2xl font-bold">{googleAdsLeads}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-xs text-gray-500">Google Ads Conversion</p>
          <p className="text-2xl font-bold">
            {googleAdsConversionRate.toFixed(1)}%
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-xs text-gray-500">Google Ads ROI</p>
          <p
            className={`text-2xl font-bold ${googleAdsROI >= 0 ? "text-green-600" : "text-red-500"}`}
          >
            {googleAdsROI.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* GOOGLE ADS SUMMARY ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-red-50 rounded-lg">
            <TrendingUp size={20} className="text-red-500" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Ads Spend</p>
            <p className="text-xl font-bold text-red-500">
              MK {googleAdsCost.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-green-50 rounded-lg">
            <TrendingUp size={20} className="text-green-500" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Ads Revenue</p>
            <p className="text-xl font-bold text-green-600">
              MK {googleAdsRevenue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* CHARTS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SourceStatsCard data={sourceChartData} topSource={topSource} />
        <ServiceStatsCard data={serviceChartData} topService={topService} />
        <CampaignStatsCard data={campaignChartData} topCampaign={topCampaign} />
      </div>

      {/* ROI INTELLIGENCE */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">ROI Intelligence</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <BestCampaignCard bestCampaign={bestCampaign} />
          <ServiceProfitCard serviceProfitStats={serviceProfitStats} />
          <SourceROICard sourceROI={sourceROI} />
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <CampaignProfitTable campaignStats={campaignStats} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
