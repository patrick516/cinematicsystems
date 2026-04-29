// app/page.tsx
import Hero from "@/app/components/sections/hero/Hero";
import Products from "@/app/components/sections/products/Products";
import Services from "@/app/components/sections/services/Services";
import Contact from "@/app/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <Contact />
    </>
  );
}
