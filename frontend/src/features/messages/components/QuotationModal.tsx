import React, { useState } from "react";
import { X, Plus, Trash2, Send } from "lucide-react";
import api from "../../../lib/api";
import toast from "react-hot-toast";

interface QuotationItem {
  description: string;
  quantity: number;
  price: number;
}

interface Message {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: string;
}

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: Message | null;
  onSuccess: () => void;
}

const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  message,
  onSuccess,
}) => {
  const [items, setItems] = useState<QuotationItem[]>([
    { description: "", quantity: 1, price: 0 },
  ]);
  const [formData, setFormData] = useState({
    validUntil: "",
    projectDescription: "",
    vat: 0,
    otherCharges: 0,
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (
    index: number,
    field: keyof QuotationItem,
    value: string | number,
  ) => {
    const newItems = [...items];
    if (field === "description") {
      newItems[index][field] = value as string;
    } else {
      newItems[index][field] = value as number;
    }
    setItems(newItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + formData.vat + formData.otherCharges;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message) {
      toast.error("No message selected");
      return;
    }

    if (!formData.validUntil) {
      toast.error("Please set valid until date");
      return;
    }

    if (!formData.projectDescription) {
      toast.error("Please enter project description");
      return;
    }

    if (
      items.some(
        (item) => !item.description || item.quantity <= 0 || item.price <= 0,
      )
    ) {
      toast.error("Please fill all item details correctly");
      return;
    }

    setLoading(true);
    try {
      const quotationData = {
        validUntil: formData.validUntil,
        customerId: message._id,
        customerName: message.name,
        customerEmail: message.email,
        customerPhone: message.phone || "",
        projectDescription: formData.projectDescription,
        items: items,
        vat: formData.vat,
        otherCharges: formData.otherCharges,
        notes: formData.notes,
        messageId: message._id,
      };

      await api.post("/quotations", quotationData);
      toast.success("Quotation sent successfully!");
      onSuccess();
      onClose();
    } catch (error) {
      toast.error("Failed to send quotation");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !message) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-xl font-semibold text-gray-800">
            Create Quotation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Customer Info Display */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">
              Customer Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Name:</span> {message.name}
              </div>
              <div>
                <span className="text-gray-500">Email:</span> {message.email}
              </div>
              {message.phone && (
                <div>
                  <span className="text-gray-500">Phone:</span> {message.phone}
                </div>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <textarea
              required
              rows={2}
              value={formData.projectDescription}
              onChange={(e) =>
                setFormData({ ...formData, projectDescription: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="Describe the project scope..."
            />
          </div>

          {/* Items Table */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Items / Services
              </label>
              <button
                type="button"
                onClick={addItem}
                className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
              >
                <Plus size={16} /> Add Item
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                      Description
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 w-20">
                      Qty
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 w-28">
                      Price
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 w-24">
                      Total
                    </th>
                    <th className="px-3 py-2 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-3 py-2">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) =>
                            updateItem(index, "description", e.target.value)
                          }
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                          placeholder="Item description"
                          required
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "quantity",
                              parseInt(e.target.value) || 0,
                            )
                          }
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                          min="1"
                          required
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "price",
                              parseFloat(e.target.value) || 0,
                            )
                          }
                          className="w-28 px-2 py-1 border border-gray-300 rounded text-sm"
                          min="0"
                          step="0.01"
                          required
                        />
                      </td>
                      <td className="px-3 py-2 text-sm font-medium">
                        R{(item.quantity * item.price).toLocaleString()}
                      </td>
                      <td className="px-3 py-2">
                        <button
                          type="button"
                          onClick={() => removeItem(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Charges Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valid Until *
              </label>
              <input
                type="date"
                required
                value={formData.validUntil}
                onChange={(e) =>
                  setFormData({ ...formData, validUntil: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                VAT (ZAR)
              </label>
              <input
                type="number"
                value={formData.vat}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vat: parseFloat(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                step="0.01"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Other Charges (ZAR)
              </label>
              <input
                type="number"
                value={formData.otherCharges}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    otherCharges: parseFloat(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes (Optional)
              </label>
              <input
                type="text"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Additional notes..."
              />
            </div>
          </div>

          {/* Totals */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2 text-right">
              <div className="text-sm">
                Subtotal:{" "}
                <span className="font-medium">
                  R{calculateSubtotal().toLocaleString()}
                </span>
              </div>
              <div className="text-sm">
                VAT:{" "}
                <span className="font-medium">
                  R{formData.vat.toLocaleString()}
                </span>
              </div>
              <div className="text-sm">
                Other:{" "}
                <span className="font-medium">
                  R{formData.otherCharges.toLocaleString()}
                </span>
              </div>
              <div className="text-lg font-bold text-primary-600">
                Total: R{calculateTotal().toLocaleString()}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Quotation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuotationModal;
