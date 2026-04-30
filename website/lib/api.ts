const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export interface Product {
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

export interface Service {
  _id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  price: number;
  status: string;
  createdAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const api = {
  // Products
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data.filter((product: Product) => product.status === "Active");
  },

  // Services
  async getServices(): Promise<Service[]> {
    const response = await fetch(`${API_URL}/services`);
    const data = await response.json();
    return data.filter((service: Service) => service.status === "Active");
  },

  // Contact Form
  async submitContact(formData: ContactFormData): Promise<any> {
    const response = await fetch(`${API_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        subject: "Contact Form Submission",
        message: formData.message,
      }),
    });
    return response.json();
  },
};
