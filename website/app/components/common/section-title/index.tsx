// app/components/common/service-card/index.tsx
interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {service.name}
      </h3>
      <p className="text-gray-500 text-sm">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
