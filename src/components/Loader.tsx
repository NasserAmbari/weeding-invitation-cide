"use client";

import { useEffect, useState } from "react";
import CountUp from "@/components/ui/CountUp";
import { Parisienne, Cormorant_Garamond } from "next/font/google";

const parisienne = Parisienne({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

interface WeddingLoaderProps {
  onComplete?: () => void;
}

const EnvelopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

export default function WeddingLoader({ onComplete }: WeddingLoaderProps) {
  const [phase, setPhase] = useState<"intro" | "counting" | "reveal" | "exit">(
    "intro",
  );
  // Separate state to fade counter out before reveal content appears
  const [showCounter, setShowCounter] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPhase("counting"), 400);
    return () => clearTimeout(t);
  }, []);

  const handleCountEnd = () => {
    // Step 1: fade counter out
    setTimeout(() => setShowCounter(false), 400);
    // Step 2: bring in reveal content
    setTimeout(() => setPhase("reveal"), 1100);
  };

  const handleOpenInvitation = () => {
    setPhase("exit");
    window.scrollTo(0, 0);
    onComplete?.();
    setTimeout(() => {
      document.documentElement.style.overflow = "";
    }, 1400);
  };

  const isReveal = phase === "reveal";
  const isExit = phase === "exit";

  return (
    <div
      className={[
        "fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black overflow-hidden",
        "transition-opacity duration-1400 ease-in-out",
        isExit ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 flex items-center gap-3 w-45">
        <div className="flex-1 h-px bg-white/10" />
        <div className="w-1 h-1 rounded-full bg-white/15 rotate-45" />
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex items-center gap-3 w-45">
        <div className="flex-1 h-px bg-white/10" />
        <div className="w-1 h-1 rounded-full bg-white/15 rotate-45" />
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div
        className={[
          "absolute inset-0 flex items-center justify-center",
          "transition-all duration-700 ease-in-out",
          showCounter
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none",
        ].join(" ")}
      >
        <div className="flex items-baseline gap-1">
          <CountUp
            from={0}
            to={100}
            duration={3}
            delay={0.2}
            startWhen={phase !== "intro"}
            onEnd={handleCountEnd}
            className={`${cormorant.className} font-light text-white leading-none text-[clamp(80px,18vw,140px)] tracking-tight`}
          />
          <span
            className={`${cormorant.className} text-white/30 text-[clamp(20px,4vw,36px)] font-light tracking-widest pb-[0.15em]`}
          >
            %
          </span>
        </div>
      </div>

      {/* ── REVEAL CONTENT ── */}
      <div className="flex flex-col items-center gap-5 px-8 text-center">
        {/* "Welcome to Our Wedding" — fade in first */}
        <p
          className={[
            `${cormorant.className} text-lg italic text-white tracking-[0.3em] uppercase`,

            "transition-all duration-700 ease-out",
            isReveal
              ? "opacity-100 translate-y-0 delay-0"
              : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          Welcome to Our Wedding
        </p>

        {/* Divider */}
        <div
          className={[
            "flex items-center gap-3 w-35",
            "transition-all duration-700 ease-out",
            isReveal
              ? "opacity-100 scale-x-100 delay-[120ms]"
              : "opacity-0 scale-x-0",
          ].join(" ")}
        >
          <div className="flex-1 h-px bg-white/20" />
          <div className="w-0.75 h-0.75 rounded-full bg-white/30 rotate-45" />
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* "Cindia & Robby" — main title */}
        <h1
          className={[
            `${parisienne.className} text-white leading-[1.1]`,
            "text-[clamp(48px,11vw,92px)]",
            "transition-all duration-700 ease-out",
            isReveal
              ? "opacity-100 translate-y-0 delay-[220ms]"
              : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          Cindia &amp; Robby
        </h1>

        {/* Date */}
        <p
          className={[
            `${cormorant.className} text-white tracking-[0.35em] text-xl`,

            "transition-all duration-700 ease-out",
            isReveal
              ? "opacity-100 translate-y-0 delay-[340ms]"
              : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          02 · Mei · 2026
        </p>

        {/* Buka Undangan button */}
        <button
          onClick={handleOpenInvitation}
          className={[
            "group mt-3 flex items-center gap-3 px-7 py-2.5",
            "border border-white/20 rounded-full",
            `${cormorant.className} text-white/70 tracking-[0.25em] text-[clamp(11px,1.3vw,13px)] uppercase font-light`,
            "transition-all duration-700 ease-out",
            "hover:border-white/50 hover:text-white hover:gap-4",
            isReveal
              ? "opacity-100 translate-y-0 delay-[480ms] pointer-events-auto cursor-pointer"
              : "opacity-0 translate-y-6 pointer-events-none",
          ].join(" ")}
        >
          <span className="transition-opacity duration-500 opacity-50 group-hover:opacity-100">
            <EnvelopeIcon />
          </span>
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
