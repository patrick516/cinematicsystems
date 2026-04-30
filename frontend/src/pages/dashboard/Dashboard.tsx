import React, { useEffect, useState } from "react";
import {
  Package,
  MessageSquare,
  Wrench,
  Eye,
  PlusCircle,
  Mail,
  Settings,
  ExternalLink,
  Inbox,
  CheckCircle,
  Clock,
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
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      link: "/products",
      linkText: "View all products",
    },
    {
      title: "Total Messages",
      value: stats.totalMessages,
      icon: MessageSquare,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      link: "/messages",
      linkText: "View all messages",
    },
    {
      title: "Total Services",
      value: stats.totalServices,
      icon: Wrench,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      link: "/services",
      linkText: "View all services",
    },
  ];

  const quickActions = [
    {
      title: "Add New Product",
      description: "Add a new product to catalog",
      icon: PlusCircle,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      action: () => navigate("/products"), // Navigate to products page and open modal
    },
    {
      title: "Add New Service",
      description: "Add a new service",
      icon: Wrench,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      action: () => navigate("/services"), // Navigate to services page and open modal
    },
    {
      title: "View Messages",
      description: "Check all customer messages",
      icon: Mail,
      color: "text-green-600",
      bgColor: "bg-green-50",
      action: () => navigate("/messages"),
    },
    {
      title: "Visit Website",
      description: "Open your website",
      icon: ExternalLink,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      action: () => window.open("http://localhost:3000", "_blank"),
      external: true,
    },
    {
      title: "Settings",
      description: "Manage system settings",
      icon: Settings,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      action: () => navigate("/settings"),
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <Inbox size={12} className="mr-1" /> New
          </span>
        );
      case "Read":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <CheckCircle size={12} className="mr-1" /> Read
          </span>
        );
      case "Replied":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            <Clock size={12} className="mr-1" /> Replied
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-xl`}>
                <stat.icon className={`${stat.textColor}`} size={24} />
              </div>
            </div>
            <div className="mt-4">
              <a
                href={stat.link}
                className={`text-sm ${stat.textColor} hover:underline inline-flex items-center gap-1`}
              >
                {stat.linkText} <Eye size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Messages
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    NAME
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    EMAIL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    SUBJECT
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentMessages.map((message) => (
                  <tr key={message._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {message.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {message.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {message.subject}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(message.status)}
                    </td>
                  </tr>
                ))}
                {recentMessages.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No messages yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Quick Actions
            </h2>
          </div>
          <div className="p-6 space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group text-left"
              >
                <div className={`${action.bgColor} p-2 rounded-lg`}>
                  <action.icon className={action.color} size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 group-hover:text-primary-600">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Products
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  PRODUCT NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  PRICE (ZAR)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  DATE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentProducts.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    R{product.price.toLocaleString()}.00
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${product.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {format(new Date(product.createdAt), "dd MMM yyyy")}
                  </td>
                </tr>
              ))}
              {recentProducts.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-gray-500"
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
