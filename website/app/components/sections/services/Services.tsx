"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const allServices = [
  {
    id: 1,
    name: "DSTv Installation & Repairs",
    description:
      "Professional installation and troubleshooting for all DSTV systems.",
    icon: "🔧",
    category: "installation",
  },
  {
    id: 2,
    name: "Home Theatre Systems",
    description:
      "Custom home theatre design and installation for immersive experiences.",
    icon: "🎬",
    category: "entertainment",
  },
  {
    id: 3,
    name: "Multiroom Sound Systems",
    description: "High quality sound in every room of your home or office.",
    icon: "🔊",
    category: "audio",
  },
  {
    id: 4,
    name: "WiFi Access Points",
    description:
      "Improve your network coverage and speed with professional setup.",
    icon: "📶",
    category: "network",
  },
  {
    id: 5,
    name: "HDMI Matrix Setup",
    description: "Seamless distribution of HDMI signals to multiple displays.",
    icon: "🎮",
    category: "installation",
  },
  {
    id: 6,
    name: "HDMI Extensions over CAT Cable",
    description: "Reliable HDMI signal transmission over long distances.",
    icon: "🔌",
    category: "installation",
  },
  {
    id: 7,
    name: "TV Wall Mounting",
    description: "Safe and secure TV wall mounting for any size television.",
    icon: "📺",
    category: "installation",
  },
  {
    id: 8,
    name: "Network Cabling",
    description:
      "Professional and neat network cabling for optimal performance.",
    icon: "🌐",
    category: "network",
  },
  {
    id: 9,
    name: "High-End HiFi Systems Setup",
    description: "Premium sound systems for audiophiles and enthusiasts.",
    icon: "🎵",
    category: "audio",
  },
  {
    id: 10,
    name: "Projector Mounting & Setup",
    description: "Perfect setup for the best viewing experience.",
    icon: "📽️",
    category: "entertainment",
  },
  {
    id: 11,
    name: "CCTV (IP/WiFi & Analogue)",
    description: "Advanced security solutions for your property protection.",
    icon: "📹",
    category: "security",
  },
  {
    id: 12,
    name: "Ceiling Speakers Installation",
    description: "Clean and efficient audio system installation.",
    icon: "🔊",
    category: "audio",
  },
  {
    id: 13,
    name: "Intercoms",
    description:
      "Modern intercom systems for secure and convenient communication.",
    icon: "📞",
    category: "security",
  },
  {
    id: 14,
    name: "Access Control",
    description:
      "Advanced access control systems to manage and monitor entry points.",
    icon: "🚪",
    category: "security",
  },
  {
    id: 15,
    name: "Bio Metrix",
    description:
      "Biometric security solutions for enhanced authentication and access management.",
    icon: "👆",
    category: "security",
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "installation", label: "Installation" },
  { key: "entertainment", label: "Entertainment" },
  { key: "audio", label: "Audio" },
  { key: "network", label: "Network" },
  { key: "security", label: "Security" },
];

const stats = [
  { value: "15+", label: "Professional Services" },
  { value: "1000+", label: "Happy Customers" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Years Experience" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" } as object,
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } as object },
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mb-3 md:mb-4">
            OUR <span className="text-blue-700">SERVICES</span>
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full mx-auto mb-4 md:mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed px-4">
            Comprehensive entertainment and security solutions for your home or
            business.
          </p>
        </motion.div>

        {/* Category Filters - Horizontal Scroll on Mobile */}
        <motion.div
          className="mb-8 md:mb-12 overflow-x-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ scrollbarWidth: "thin", msOverflowStyle: "auto" }}
        >
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 pb-2 min-w-max md:min-w-0">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold capitalize border transition-all duration-200 whitespace-nowrap ${
                  activeCategory === key
                    ? "bg-blue-700 text-white border-blue-700 shadow-[0_4px_14px_rgba(21,101,192,0.3)]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid - Mobile Optimized */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-8 md:gap-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredServices.map(({ id, name, description, icon }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className="group flex items-start gap-3 md:gap-4 bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-100
                           hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(21,101,192,0.10)] transition-all duration-300 cursor-pointer"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center
                                group-hover:bg-blue-700 group-hover:border-blue-700 group-hover:shadow-[0_4px_14px_rgba(21,101,192,0.35)] transition-all duration-300"
                >
                  <span className="text-base md:text-xl group-hover:scale-110 transition-transform duration-300 leading-none">
                    {icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug mb-1 group-hover:text-blue-700 transition-colors duration-200">
                    {name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 md:line-clamp-none">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats - Mobile Optimized */}
        <motion.div
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white border border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 text-center
                         hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(21,101,192,0.10)] transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-0.5 md:mb-1">
                {value}
              </div>
              <div className="text-[11px] md:text-xs text-gray-500 font-medium">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
