import React, { useState, useEffect } from "react";
import { Plus, Search } from "lucide-react";
import {
  useServices,
  ServiceForm,
  ServiceTable,
} from "../../features/services";

const Services: React.FC = () => {
  const {
    services,
    loading,
    searchTerm,
    setSearchTerm,
    createService,
    updateService,
    deleteService,
  } = useServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "🔧",
    category: "",
    price: "",
    status: "Active",
  });
  const [saving, setSaving] = useState(false);

  // Check for auto-open from URL param
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("action") === "new") {
      setIsModalOpen(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const serviceData = {
        ...formData,
        price: parseFloat(formData.price) || 0,
      };
      if (editingService) {
        await updateService(editingService._id, serviceData);
      } else {
        await createService(serviceData);
      }
      handleCloseModal();
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (service: any) => {
    setEditingService(service);
    setFormData({
      name: service.name,
      description: service.description,
      icon: service.icon || "🔧",
      category: service.category,
      price: service.price?.toString() || "",
      status: service.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      await deleteService(id);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
    setFormData({
      name: "",
      description: "",
      icon: "🔧",
      category: "",
      price: "",
      status: "Active",
    });
    // Remove query param
    const url = new URL(window.location.href);
    url.searchParams.delete("action");
    window.history.replaceState({}, "", url.toString());
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Services</h1>
          <p className="text-gray-500 mt-1">Manage your service offerings</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} /> Add New Service
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search services by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <ServiceTable
          services={services}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <ServiceForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        editingId={editingService?._id}
        loading={saving}
      />
    </div>
  );
};

export default Services;
