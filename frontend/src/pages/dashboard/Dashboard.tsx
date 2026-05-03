import React, { useEffect, useState } from "react";
import {
  Package,
  MessageSquare,
  Wrench,
  BarChart2,
  PlusCircle,
  Mail,
  Settings,
  ExternalLink,
  Inbox,
  CheckCircle,
  Clock,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../lib/api";
import type { DashboardStats, Message, Product } from "../../types";
import { format } from "date-fns";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalServices: 0,
    totalMessages: 0,
  });
  const [recentMessages, setRecentMessages] = useState<Message[]>([]);
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, messagesRes, productsRes] = await Promise.all([
        api.get("/dashboard/stats"),
        api.get("/dashboard/recent-messages"),
        api.get("/dashboard/recent-products"),
      ]);
      setStats(statsRes.data);
      setRecentMessages(messagesRes.data);
      setRecentProducts(productsRes.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      iconBg: "#dbeafe",
      iconColor: "#2563eb",
      cardAccent: "#2563eb",
      link: "/products",
      linkText: "View all products",
      linkColor: "#2563eb",
    },
    {
      title: "Total Messages",
      value: stats.totalMessages,
      icon: MessageSquare,
      iconBg: "#dcfce7",
      iconColor: "#16a34a",
      cardAccent: "#16a34a",
      link: "/messages",
      linkText: "View all messages",
      linkColor: "#16a34a",
    },
    {
      title: "Total Services",
      value: stats.totalServices,
      icon: Wrench,
      iconBg: "#ede9fe",
      iconColor: "#7c3aed",
      cardAccent: "#7c3aed",
      link: "/services",
      linkText: "View all services",
      linkColor: "#7c3aed",
    },
    {
      title: "Website Visits",
      value: "1,245",
      icon: BarChart2,
      iconBg: "#ffedd5",
      iconColor: "#ea580c",
      cardAccent: "#ea580c",
      link: "#",
      linkText: "View analytics",
      linkColor: "#ea580c",
    },
  ];

  const quickActions = [
    {
      title: "Add New Product",
      description: "Add a new product to catalog",
      icon: PlusCircle,
      iconBg: "#dbeafe",
      iconColor: "#2563eb",
      action: () => navigate("/products"),
    },
    {
      title: "Add New Service",
      description: "Add a new service",
      icon: Wrench,
      iconBg: "#dcfce7",
      iconColor: "#16a34a",
      action: () => navigate("/services"),
    },
    {
      title: "View Messages",
      description: "Check all customer messages",
      icon: Mail,
      iconBg: "#ede9fe",
      iconColor: "#7c3aed",
      action: () => navigate("/messages"),
    },
    {
      title: "Visit Website",
      description: "Open your website",
      icon: ExternalLink,
      iconBg: "#ffedd5",
      iconColor: "#ea580c",
      action: () => window.open("http://localhost:3000", "_blank"),
    },
    {
      title: "Settings",
      description: "Manage system settings",
      icon: Settings,
      iconBg: "#f3f4f6",
      iconColor: "#374151",
      action: () => navigate("/settings"),
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return (
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: "#dcfce7", color: "#15803d" }}
          >
            <Inbox size={11} /> New
          </span>
        );
      case "Read":
        return (
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: "#dbeafe", color: "#1d4ed8" }}
          >
            <CheckCircle size={11} /> Read
          </span>
        );
      case "Replied":
        return (
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: "#ede9fe", color: "#6d28d9" }}
          >
            <Clock size={11} /> Replied
          </span>
        );
      default:
        return (
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: "#f3f4f6", color: "#374151" }}
          >
            {status}
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto"
            style={{ borderColor: "#2563eb" }}
          />
          <p className="mt-4 text-sm" style={{ color: "#6b7280" }}>
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "#111827" }}>
          Dashboard
        </h1>
      </div>

      {/* Stat Cards — 4 columns matching mockup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statCards.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl p-5 flex items-start gap-4"
            style={{
              background: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: stat.iconBg }}
            >
              <stat.icon size={22} style={{ color: stat.iconColor }} />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-xs font-medium mb-0.5"
                style={{ color: "#6b7280" }}
              >
                {stat.title}
              </p>
              <p
                className="text-3xl font-bold leading-none"
                style={{ color: "#111827" }}
              >
                {stat.value}
              </p>
              <a
                href={stat.link}
                className="inline-flex items-center gap-1 text-xs font-medium mt-2 hover:underline"
                style={{ color: stat.linkColor }}
              >
                {stat.linkText} <ChevronRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Middle row: Recent Messages + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Messages — 2/3 */}
        <div
          className="lg:col-span-2 rounded-xl overflow-hidden"
          style={{
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: "#f3f4f6" }}
          >
            <h2
              className="font-semibold text-base"
              style={{ color: "#111827" }}
            >
              Recent Messages
            </h2>
            <a
              href="/messages"
              className="text-xs font-medium hover:underline"
              style={{ color: "#2563eb" }}
            >
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#f9fafb" }}>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "#9ca3af" }}
                  >
                    Name
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "#9ca3af" }}
                  >
                    Email
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "#9ca3af" }}
                  >
                    Subject
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "#9ca3af" }}
                  >
                    Date
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "#9ca3af" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentMessages.map((msg) => (
                  <tr
                    key={msg._id}
                    className="border-t hover:bg-gray-50 transition-colors"
                    style={{ borderColor: "#f3f4f6" }}
                  >
                    <td
                      className="px-6 py-3.5 font-medium"
                      style={{ color: "#111827" }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            background:
                              msg.status === "New" ? "#22c55e" : "#3b82f6",
                          }}
                        />
                        {msg.name}
                      </span>
                    </td>
                    <td className="px-6 py-3.5" style={{ color: "#6b7280" }}>
                      {msg.email}
                    </td>
                    <td className="px-6 py-3.5" style={{ color: "#374151" }}>
                      {msg.subject}
                    </td>
                    <td
                      className="px-6 py-3.5 text-xs"
                      style={{ color: "#9ca3af" }}
                    >
                      {format(
                        new Date(msg.createdAt || Date.now()),
                        "d MMM yyyy",
                      )}
                    </td>
                    <td className="px-6 py-3.5">
                      {getStatusBadge(msg.status)}
                    </td>
                  </tr>
                ))}
                {recentMessages.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-10 text-center text-sm"
                      style={{ color: "#9ca3af" }}
                    >
                      No messages yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions — 1/3 */}
        <div
          className="rounded-xl"
          style={{
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="px-6 py-4 border-b"
            style={{ borderColor: "#f3f4f6" }}
          >
            <h2
              className="font-semibold text-base"
              style={{ color: "#111827" }}
            >
              Quick Actions
            </h2>
          </div>
          <div className="divide-y" style={{ borderColor: "#f3f4f6" }}>
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={action.action}
                className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors text-left group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: action.iconBg }}
                >
                  <action.icon size={18} style={{ color: action.iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold leading-tight"
                    style={{ color: "#111827" }}
                  >
                    {action.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>
                    {action.description}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="opacity-30 group-hover:opacity-70 transition-opacity flex-shrink-0"
                  style={{ color: "#374151" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
      >
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "#f3f4f6" }}
        >
          <h2 className="font-semibold text-base" style={{ color: "#111827" }}>
            Recent Products
          </h2>
          <a
            href="/products"
            className="text-xs font-medium hover:underline"
            style={{ color: "#2563eb" }}
          >
            View all
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                <th
                  className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "#9ca3af" }}
                >
                  Image
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "#9ca3af" }}
                >
                  Product Name
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "#9ca3af" }}
                >
                  Price (ZAR)
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "#9ca3af" }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentProducts.map((product) => (
                <tr
                  key={product._id}
                  className="border-t hover:bg-gray-50 transition-colors"
                  style={{ borderColor: "#f3f4f6" }}
                >
                  <td className="px-6 py-3.5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
                      style={{ background: "#f3f4f6" }}
                    >
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Package size={18} style={{ color: "#9ca3af" }} />
                      )}
                    </div>
                  </td>
                  <td
                    className="px-6 py-3.5 font-medium"
                    style={{ color: "#111827" }}
                  >
                    {product.name}
                  </td>
                  <td className="px-6 py-3.5" style={{ color: "#374151" }}>
                    R{product.price.toLocaleString()}.00
                  </td>
                  <td className="px-6 py-3.5">
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={
                        product.status === "Active"
                          ? { background: "#dcfce7", color: "#15803d" }
                          : { background: "#fee2e2", color: "#dc2626" }
                      }
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
              {recentProducts.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-10 text-center text-sm"
                    style={{ color: "#9ca3af" }}
                  >
                    No products yet. Click "Add New Product" to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
