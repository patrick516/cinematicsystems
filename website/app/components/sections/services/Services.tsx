"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

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
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/services`,
      );
      const data = await response.json();
      // Filter only active services
      setServices(data.filter((s: any) => s.status === "Active"));
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories from fetched services
  const categories = [
    { key: "all", label: "All" },
    ...Array.from(new Set(services.map((s: any) => s.category)))
      .filter(Boolean)
      .map((cat) => ({
        key: cat,
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
      })),
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s: any) => s.category === activeCategory);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          </div>
        </div>
      </section>
    );
  }

  if (services.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">
            No services available.
          </div>
        </div>
      </section>
    );
  }

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
            {filteredServices.map((service: any) => (
              <motion.div
                key={service._id}
                variants={itemVariants}
                className="group flex items-start gap-3 md:gap-4 bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-100
                           hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(21,101,192,0.10)] transition-all duration-300 cursor-pointer"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center
                                group-hover:bg-blue-700 group-hover:border-blue-700 group-hover:shadow-[0_4px_14px_rgba(21,101,192,0.35)] transition-all duration-300"
                >
                  <span className="text-base md:text-xl group-hover:scale-110 transition-transform duration-300 leading-none">
                    {service.icon || "🔧"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug mb-1 group-hover:text-blue-700 transition-colors duration-200">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 md:line-clamp-none">
                    {service.description}
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
