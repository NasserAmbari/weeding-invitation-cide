"use client";

import { useEffect, useState } from "react";
import CountUp from "@/components/ui/CountUp";

interface WeddingLoaderProps {
  onComplete?: () => void;
}

export default function WeddingLoader({ onComplete }: WeddingLoaderProps) {
  const [phase, setPhase] = useState<"intro" | "counting" | "reveal" | "exit">(
    "intro",
  );

  // Lock scroll while loader is active
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
    setTimeout(() => {
      setPhase("reveal");

      setTimeout(() => {
        setPhase("exit");
        window.scrollTo(0, 0);

        setTimeout(() => {
          document.documentElement.style.overflow = "";
          onComplete?.();
        }, 1000);
      }, 3000);
    }, 500);
  };

  return (
    <div
      className={[
        "fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black",
        "transition-opacity duration-1600 ease-in-out",
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      {/* Counter */}
      <div className="flex items-baseline gap-1">
        <CountUp
          from={0}
          to={100}
          duration={3}
          delay={0.2}
          startWhen={phase !== "intro"}
          onEnd={handleCountEnd}
          className="font-light text-white leading-none"
        />
        <span
          className="text-white/50 pb-3"
          style={{
            fontSize: "clamp(14px, 2vw, 22px)",
            fontFamily: "'Cinzel', serif",
          }}
        >
          %
        </span>
      </div>

      <div
        style={{
          opacity: phase === "reveal" || phase === "exit" ? 1 : 0,
          transform:
            phase === "reveal" || phase === "exit"
              ? "translateY(0px)"
              : "translateY(12px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <p
          className="italic font-light text-white/90 tracking-widest"
          style={{
            fontSize: "clamp(18px, 3vw, 28px)",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Cindia &amp; Robby
        </p>
      </div>
    </div>
  );
}
