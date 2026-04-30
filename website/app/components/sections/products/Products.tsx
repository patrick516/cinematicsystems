"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  badge: string;
  features: string[];
  category: string;
  status: string;
  createdAt: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as object,
  },
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
      );
      const data = await response.json();
      // Filter only active products
      setProducts(data.filter((p: Product) => p.status === "Active"));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section
        id="products"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section
        id="products"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">
            No products available.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            OUR <span className="text-blue-700">PRODUCTS</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            High quality products for the best entertainment experience.
          </p>
        </motion.div>

        {/* FIRST PRODUCT (static - no scroll effect) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6"
        >
          <ProductCard product={products[0]} />
        </motion.div>

        {/* REST PRODUCTS (scrollable on small screens, grid on large) */}
        <div
          className="
            flex gap-6 overflow-x-auto pb-4
            lg:grid lg:grid-cols-3 lg:overflow-visible
            scroll-smooth
          "
        >
          {products.slice(1).map((product) => (
            <motion.div
              key={product._id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="min-w-[280px] lg:min-w-0"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

/* Reusable Card */
function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-2xl p-7 flex flex-col overflow-hidden cursor-pointer
                 hover:border-blue-400 hover:shadow-[0_20px_48px_rgba(21,101,192,0.15)] transition"
    >
      {product.badge && (
        <span className="absolute top-5 right-5 text-[10px] font-bold uppercase bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      <div className="text-3xl mb-4">{product.icon || "📺"}</div>

      <h3 className="text-lg font-bold mb-2">{product.name}</h3>

      <p className="text-sm text-gray-500 mb-4 flex-1">{product.description}</p>

      {product.features && product.features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {product.features.map((f: string, idx: number) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs text-gray-600"
            >
              <Check className="w-3 h-3 text-blue-600" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <button className="flex items-center gap-2 text-sm font-semibold text-blue-700 border-t pt-3">
        Learn More <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
