import React, { useState } from "react";
import { Search } from "lucide-react";
import {
  useMessages,
  MessageTable,
  MessageModal,
} from "../../features/messages";
import QuotationModal from "../../features/messages/components/QuotationModal";

const Messages: React.FC = () => {
  const {
    messages,
    loading,
    searchTerm,
    setSearchTerm,
    markAsRead,
    sendReply,
    refetch,
  } = useMessages();

  // State for message view modal
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [replyText, setReplyText] = useState("");
  const [replying, setReplying] = useState(false);

  // State for quotation modal
  const [showQuotationModal, setShowQuotationModal] = useState(false);
  const [quotationMessage, setQuotationMessage] = useState<any>(null);

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    setReplying(true);
    try {
      await sendReply(selectedMessage._id, replyText);
      setSelectedMessage(null);
      setReplyText("");
    } finally {
      setReplying(false);
    }
  };

  const handleView = (message: any) => {
    setSelectedMessage(message);
  };

  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id);
  };

  const handleOpenQuotation = (message: any) => {
    setQuotationMessage(message);
    setShowQuotationModal(true);
    // Close the message modal if open
    if (selectedMessage) {
      setSelectedMessage(null);
    }
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
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        <p className="text-gray-500 mt-1">
          View and respond to customer inquiries
        </p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <MessageTable
          messages={messages}
          onView={handleView}
          onMarkAsRead={handleMarkAsRead}
          onQuotation={handleOpenQuotation}
        />
      </div>

      {/* Message Modal */}
      <MessageModal
        message={selectedMessage}
        onClose={() => {
          setSelectedMessage(null);
          setReplyText("");
        }}
        onReply={handleReply}
        replyText={replyText}
        setReplyText={setReplyText}
        replying={replying}
        onQuotation={handleOpenQuotation}
      />

      {/* Quotation Modal */}
      <QuotationModal
        isOpen={showQuotationModal}
        onClose={() => {
          setShowQuotationModal(false);
          setQuotationMessage(null);
        }}
        message={quotationMessage}
        onSuccess={() => {
          refetch();
          // Close any open modals
          setShowQuotationModal(false);
          setQuotationMessage(null);
        }}
      />
    </div>
  );
};

export default Messages;
