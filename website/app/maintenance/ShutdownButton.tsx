"use client";

import { useState, useEffect } from "react";
import { Power } from "lucide-react";

type Phase = "idle" | "flicker" | "collapse" | "line" | "off";

export default function ShutdownButton() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (localStorage.getItem("cs_screen_off") === "true") {
      setPhase("off");
    }
  }, []);

  const handleShutdown = () => {
    if (phase !== "idle") return;

    setPhase("flicker");
    setTimeout(() => setPhase("collapse"), 900);
    setTimeout(() => setPhase("line"), 1600);
    setTimeout(() => {
      setPhase("off");
      localStorage.setItem("cs_screen_off", "true");
    }, 2400);
  };

  if (phase === "off") {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: 9999,
        }}
      />
    );
  }

  return (
    <>
      {phase === "flicker" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000",
            animation: "cs-flicker 0.9s ease-in forwards",
            pointerEvents: "none",
          }}
        />
      )}

      {phase === "collapse" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "cs-collapse 0.7s cubic-bezier(0.4, 0, 1, 1) forwards",
            transformOrigin: "center center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 12px 4px rgba(255,255,255,0.4)",
            }}
          />
        </div>
      )}

      {phase === "line" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 12px 4px rgba(255,255,255,0.4)",
              animation: "cs-line-shrink 0.8s ease-in forwards",
              transformOrigin: "center center",
            }}
          />
        </div>
      )}

      {/* SHUTDOWN BUTTON */}
      <div className="flex flex-col items-center gap-3 mt-10">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          Done reading?
        </p>

        <button
          onClick={handleShutdown}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
            color: "#fff",
            border: "1px solid rgba(239,68,68,0.5)",
            boxShadow:
              "0 0 0 1px rgba(239,68,68,0.15), 0 4px 20px rgba(220,38,38,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.boxShadow =
              "0 0 0 1px rgba(239,68,68,0.3), 0 4px 28px rgba(220,38,38,0.55), inset 0 1px 0 rgba(255,255,255,0.15)";
            el.style.background =
              "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.boxShadow =
              "0 0 0 1px rgba(239,68,68,0.15), 0 4px 20px rgba(220,38,38,0.35), inset 0 1px 0 rgba(255,255,255,0.1)";
            el.style.background =
              "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)";
          }}
        >
          <Power className="w-4 h-4" />
          Power Off
        </button>

        <p className="text-gray-700 text-xs text-center max-w-xs leading-relaxed">
          Closes this screen permanently until you reopen your browser.
        </p>
      </div>

      <style>{`
        @keyframes cs-flicker {
          0%   { opacity: 0; }
          8%   { opacity: 0.85; }
          12%  { opacity: 0.05; }
          18%  { opacity: 0.9; }
          22%  { opacity: 0; }
          30%  { opacity: 0.95; }
          36%  { opacity: 0.1; }
          44%  { opacity: 0.85; }
          50%  { opacity: 0.05; }
          58%  { opacity: 1; }
          68%  { opacity: 0.2; }
          78%  { opacity: 0.95; }
          88%  { opacity: 0.4; }
          100% { opacity: 1; }
        }
        @keyframes cs-collapse {
          0%   { transform: scaleY(1);     opacity: 1; }
          60%  { transform: scaleY(0.015); opacity: 1; }
          100% { transform: scaleY(0.015); opacity: 1; }
        }
        @keyframes cs-line-shrink {
          0%   { transform: scaleX(1);    opacity: 1; }
          60%  { transform: scaleX(0.08); opacity: 1; }
          85%  { transform: scaleX(0.02); opacity: 0.6; }
          100% { transform: scaleX(0);    opacity: 0; }
        }
      `}</style>
    </>
  );
}
