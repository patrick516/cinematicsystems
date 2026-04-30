"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Wifi,
  Shield,
  Tv,
  Music,
  Home,
  Camera,
  Monitor,
  Volume2,
  Smartphone,
  Wrench,
  Network,
  Lock,
} from "lucide-react";
import { useEffect, useState } from "react";

// Icon mapping for dynamic services
const iconMap: Record<string, any> = {
  "🔧": Wrench,
  "🎬": Monitor,
  "🔊": Volume2,
  "📶": Wifi,
  "🎮": Monitor,
  "🔌": Tv,
  "📺": Tv,
  "🌐": Network,
  "🎵": Music,
  "📽️": Monitor,
  "📹": Camera,
  "📞": Smartphone,
  "🚪": Lock,
  "👆": Shield,
  "🛡️": Shield,
  "💿": Tv,
  "🖥️": Monitor,
  "📡": Wifi,
  "💳": Smartphone,
};

// Beautiful modern color palette - will cycle through these
const colorPalette = [
  {
    icon: "text-blue-600",
    text: "text-blue-600",
    bg: "bg-blue-50",
    ring: "ring-blue-200",
    button: "bg-blue-600",
    buttonHover: "hover:bg-blue-700",
  },
  {
    icon: "text-purple-600",
    text: "text-purple-600",
    bg: "bg-purple-50",
    ring: "ring-purple-200",
    button: "bg-purple-600",
    buttonHover: "hover:bg-purple-700",
  },
  {
    icon: "text-pink-600",
    text: "text-pink-600",
    bg: "bg-pink-50",
    ring: "ring-pink-200",
    button: "bg-pink-600",
    buttonHover: "hover:bg-pink-700",
  },
  {
    icon: "text-orange-600",
    text: "text-orange-600",
    bg: "bg-orange-50",
    ring: "ring-orange-200",
    button: "bg-orange-600",
    buttonHover: "hover:bg-orange-700",
  },
  {
    icon: "text-green-600",
    text: "text-green-600",
    bg: "bg-green-50",
    ring: "ring-green-200",
    button: "bg-green-600",
    buttonHover: "hover:bg-green-700",
  },
  {
    icon: "text-red-600",
    text: "text-red-600",
    bg: "bg-red-50",
    ring: "ring-red-200",
    button: "bg-red-600",
    buttonHover: "hover:bg-red-700",
  },
  {
    icon: "text-indigo-600",
    text: "text-indigo-600",
    bg: "bg-indigo-50",
    ring: "ring-indigo-200",
    button: "bg-indigo-600",
    buttonHover: "hover:bg-indigo-700",
  },
  {
    icon: "text-teal-600",
    text: "text-teal-600",
    bg: "bg-teal-50",
    ring: "ring-teal-200",
    button: "bg-teal-600",
    buttonHover: "hover:bg-teal-700",
  },
  {
    icon: "text-cyan-600",
    text: "text-cyan-600",
    bg: "bg-cyan-50",
    ring: "ring-cyan-200",
    button: "bg-cyan-600",
    buttonHover: "hover:bg-cyan-700",
  },
  {
    icon: "text-amber-600",
    text: "text-amber-600",
    bg: "bg-amber-50",
    ring: "ring-amber-200",
    button: "bg-amber-600",
    buttonHover: "hover:bg-amber-700",
  },
  {
    icon: "text-emerald-600",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
    ring: "ring-emerald-200",
    button: "bg-emerald-600",
    buttonHover: "hover:bg-emerald-700",
  },
  {
    icon: "text-rose-600",
    text: "text-rose-600",
    bg: "bg-rose-50",
    ring: "ring-rose-200",
    button: "bg-rose-600",
    buttonHover: "hover:bg-rose-700",
  },
];

const Hero = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "cutting" | "waiting">(
    "typing",
  );
  const [charIndex, setCharIndex] = useState(0);
  const [cutIndex, setCutIndex] = useState(0);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/services`,
      );
      const data = await response.json();

      // Filter only active services and take first 12 for rotation
      const activeServices = data
        .filter((s: any) => s.status === "Active")
        .slice(0, 12);

      // Transform API services with cycling colors
      const formattedServices = activeServices.map(
        (service: any, index: number) => {
          const colorIndex = index % colorPalette.length;
          const colors = colorPalette[colorIndex];
          return {
            name: service.name,
            color: colors.text,
            iconColor: colors.icon,
            bgColor: colors.bg,
            ringColor: colors.ring,
            buttonColor: colors.button,
            buttonHover: colors.buttonHover,
            icon: iconMap[service.icon] || iconMap[service.category] || Wrench,
          };
        },
      );

      setServices(formattedServices);
    } catch (error) {
      console.error("Error fetching services for hero:", error);
      // Fallback to default services
      const fallbackServices = [
        { name: "DSTV Installation", icon: Tv },
        { name: "CCTV Security Systems", icon: Camera },
        { name: "WiFi & Networking", icon: Wifi },
        { name: "Home Theatre Setup", icon: Monitor },
        { name: "Audio Systems", icon: Volume2 },
        { name: "TV Wall Mounting", icon: Tv },
        { name: "Projector Installation", icon: Monitor },
        { name: "Access Control Systems", icon: Shield },
        { name: "Smart Home Automation", icon: Home },
        { name: "Satellite Dish Alignment", icon: Tv },
        { name: "Soundproofing Solutions", icon: Music },
        { name: "Network Cabling", icon: Wifi },
      ];

      const formattedFallback = fallbackServices.map((service, index) => {
        const colorIndex = index % colorPalette.length;
        const colors = colorPalette[colorIndex];
        return {
          name: service.name,
          color: colors.text,
          iconColor: colors.icon,
          bgColor: colors.bg,
          ringColor: colors.ring,
          buttonColor: colors.button,
          buttonHover: colors.buttonHover,
          icon: service.icon,
        };
      });

      setServices(formattedFallback);
    } finally {
      setLoading(false);
    }
  };

  const currentService = services[currentServiceIndex];
  const targetText = currentService?.name || "";

  // Typing effect
  useEffect(() => {
    if (!currentService) return;

    if (phase === "typing" && charIndex < targetText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + targetText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timer);
    }

    if (phase === "typing" && charIndex === targetText.length) {
      const timer = setTimeout(() => {
        setPhase("cutting");
        setCutIndex(targetText.length - 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase, charIndex, targetText, currentService]);

  // Cutting effect
  useEffect(() => {
    if (phase === "cutting" && cutIndex >= 0) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCutIndex((prev) => prev - 1);
      }, 60);
      return () => clearTimeout(timer);
    }

    if (phase === "cutting" && cutIndex < 0) {
      setPhase("waiting");
      setTimeout(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        setDisplayText("");
        setCharIndex(0);
        setPhase("typing");
      }, 250);
    }
  }, [phase, cutIndex, services.length]);

  // Show loading state while fetching services
  if (loading || services.length === 0) {
    return (
      <section id="hero" className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/cinematic.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="text-xs md:text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Trusted Professional Installation Services
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              PROFESSIONAL
            </h1>
            <div className="relative h-[70px] md:h-[90px] overflow-hidden mt-3 mb-3 flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 md:h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <h2 className="text-3xl md:text-xl font-bold text-gray-900 leading-tight">
              INSTALLATIONS & MAINTENANCE
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-5 max-w-xl leading-relaxed">
              We deliver professional DSTV, CCTV, WiFi, audio systems and smart
              home installation services for homes and businesses.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <div className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium inline-flex items-center justify-center opacity-50">
                Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </div>
              <div className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium inline-flex items-center justify-center opacity-50">
                Get Free Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const CurrentIcon = currentService.icon;
  const currentColors = currentService;

  return (
    <section id="hero" className="relative py-20 md:py-24 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cinematic.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          {/* BADGE */}
          <div className="mb-4">
            <span className="text-xs md:text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Trusted Professional Installation Services
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            PROFESSIONAL
          </h1>

          {/* TYPEWRITER BOX */}
          <div className="relative h-[70px] md:h-[90px] overflow-hidden mt-3 mb-3 flex items-center gap-3">
            <div
              className={`p-2 rounded-full ${currentColors.bgColor} ring-2 ${currentColors.ringColor} ring-offset-2 transition-all duration-300`}
            >
              <CurrentIcon
                className={`w-6 h-6 md:w-8 md:h-8 ${currentColors.iconColor}`}
              />
            </div>

            <span
              className={`text-2xl md:text-4xl font-semibold tracking-tight transition-all duration-300 ${currentColors.color}`}
            >
              {displayText}
              <span
                className={`animate-pulse inline-block w-0.5 h-7 md:h-9 ml-1 ${currentColors.color}`}
              >
                |
              </span>
            </span>
          </div>

          {/* SUB TITLE */}
          <h2 className="text-2xl md:text-xl font-bold text-gray-900 leading-tight">
            INSTALLATIONS & MAINTENANCE
          </h2>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base text-gray-600 mt-5 max-w-xl leading-relaxed">
            We deliver professional DSTV, CCTV, WiFi, audio systems and smart
            home installation services for homes and businesses.
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href="#services"
              className={`px-6 py-3 ${currentColors.buttonColor} ${currentColors.buttonHover} text-white rounded-lg transition font-medium inline-flex items-center justify-center shadow-lg hover:shadow-xl`}
            >
              Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className={`px-6 py-3 border-2 ${currentColors.color} rounded-lg hover:${currentColors.bgColor} transition font-medium inline-flex items-center justify-center`}
              style={{
                borderColor: currentColors.iconColor.replace("text-", ""),
                color: currentColors.iconColor.replace("text-", ""),
              }}
            >
              Get Free Quote
            </Link>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-10 flex flex-wrap gap-4 text-gray-600 text-sm">
            {[
              "Certified Installers",
              "Same-Day Service",
              "Warranty Included",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
