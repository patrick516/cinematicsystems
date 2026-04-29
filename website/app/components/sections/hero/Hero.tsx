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
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const services = [
    { name: "DSTV Installation", color: "text-blue-600", icon: Tv },
    { name: "CCTV Security Systems", color: "text-red-500", icon: Camera },
    { name: "WiFi & Networking", color: "text-green-500", icon: Wifi },
    { name: "Home Theatre Setup", color: "text-purple-500", icon: Monitor },
    { name: "Audio Systems", color: "text-orange-500", icon: Volume2 },
    { name: "TV Wall Mounting", color: "text-indigo-500", icon: Tv },
    { name: "Projector Installation", color: "text-pink-500", icon: Monitor },
    { name: "Access Control Systems", color: "text-yellow-500", icon: Shield },
    { name: "Smart Home Automation", color: "text-cyan-500", icon: Home },
    { name: "Satellite Dish Alignment", color: "text-emerald-500", icon: Tv },
    { name: "Soundproofing Solutions", color: "text-amber-500", icon: Music },
    { name: "Network Cabling", color: "text-teal-500", icon: Wifi },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "cutting" | "waiting">(
    "typing",
  );
  const [charIndex, setCharIndex] = useState(0);
  const [cutIndex, setCutIndex] = useState(0);

  const currentService = services[currentServiceIndex];
  const targetText = currentService.name;

  // Typing effect
  useEffect(() => {
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
  }, [phase, charIndex, targetText]);

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
  }, [phase, cutIndex]);

  const CurrentIcon = currentService.icon;

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
            <CurrentIcon
              className={`w-8 h-8 md:w-10 md:h-10 ${currentService.color}`}
            />

            <span
              className={`text-2xl md:text-4xl font-semibold tracking-tight transition-all duration-300 ${currentService.color}`}
            >
              {displayText}
            </span>
          </div>

          {/* SUB TITLE */}
          <h2 className="text-3xl md:text-xl font-bold text-gray-900 leading-tight">
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
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium inline-flex items-center justify-center"
            >
              Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium inline-flex items-center justify-center"
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
