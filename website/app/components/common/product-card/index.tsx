// app/components/common/product-card/index.tsx
import { Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  icon: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="text-5xl mb-4">{product.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        <div className="space-y-2">
          {product.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
