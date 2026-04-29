"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Wrench,
  Wifi,
  Tv,
  Network,
  Layers,
  Headphones,
  ChevronRight,
  Zap,
  Phone,
} from "lucide-react";

import { MdOutlineTheaters, MdOutlineSurroundSound } from "react-icons/md";
import { TbDeviceProjector } from "react-icons/tb";
import { BsCameraVideo, BsDoorOpen } from "react-icons/bs";
import { PiFingerprint, PiPlugBold } from "react-icons/pi";
import { RiSpeakerLine } from "react-icons/ri";

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
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-5">
            <Zap className="w-3 h-3" />
            What We Do
          </span> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mb-4">
            OUR <span className="text-blue-700">SERVICES</span>
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Comprehensive entertainment and security solutions for your home or
            business.
          </p>
        </motion.div>
        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold capitalize border transition-all duration-200 ${
                activeCategory === key
                  ? "bg-blue-700 text-white border-blue-700 shadow-[0_4px_14px_rgba(21,101,192,0.3)]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>
        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredServices.map(({ id, name, description, icon }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100
                           hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(21,101,192,0.10)] transition-all duration-300 cursor-pointer"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center
                                group-hover:bg-blue-700 group-hover:border-blue-700 group-hover:shadow-[0_4px_14px_rgba(21,101,192,0.35)] transition-all duration-300"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300 leading-none">
                    {icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 group-hover:text-blue-700 transition-colors duration-200">
                    {name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center
                         hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(21,101,192,0.10)] transition-all duration-300"
            >
              <div className="text-3xl font-extrabold text-blue-700 mb-1">
                {value}
              </div>
              <div className="text-xs text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>
        {/* CTA Banner
        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-800 to-blue-500 rounded-2xl p-10 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 relative z-10">
            Ready to Get Started?
          </h3>
          <p className="text-blue-100 mb-7 relative z-10 max-w-md mx-auto">
            Contact us today for professional advice and a free quote.
          </p>
          <a
            href="#contact"
            className="relative z-10 inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-sm
                       hover:bg-blue-50 hover:gap-3 transition-all duration-200 shadow-lg"
          >
            Contact Us <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
