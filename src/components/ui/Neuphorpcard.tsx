"use client";

import { motion } from "framer-motion";
import React from "react";

// ─── Types ────────────────────────────────────────────────────────────

/**
 * Variant neumorphism:
 * - "flat"     → permukaan datar dengan shadow halus (default)
 * - "pressed"  → tertekan ke dalam (concave)
 * - "floating" → melayang lebih tinggi dari permukaan
 * - "glass"    → efek kaca frosted dengan border transparan
 */
export type NeumorphVariant = "flat" | "pressed" | "floating" | "glass";

export interface NeumorphCardProps {
  children?: React.ReactNode;
  variant?: NeumorphVariant;
  /** Interaksi hover — card sedikit terangkat saat hover */
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
  /** Radius sudut. Default: "2xl" */
  radius?: "lg" | "2xl" | "3xl" | "full";
  /** Warna aksen border tipis. Default: transparan */
  accent?: string;
  as?: React.ElementType;
}

// ─── Shadow presets ───────────────────────────────────────────────────
//
// Dark neumorphism menggunakan dua shadow:
// 1. Shadow gelap (lebih gelap dari bg) → sisi kanan/bawah = kedalaman
// 2. Shadow terang (lebih terang dari bg) → sisi kiri/atas = highlight
//
// Background: #0a0a0a
// Gelap:  #050505 (sedikit lebih gelap)
// Terang: #141414 (sedikit lebih terang)

const SHADOWS: Record<NeumorphVariant, string> = {
  flat: "6px 6px 16px #050505, -4px -4px 12px #141414, inset 0 1px 0 rgba(255,255,255,0.03)",

  pressed: "inset 4px 4px 10px #050505, inset -3px -3px 8px #141414",

  floating:
    "12px 12px 28px #040404, -6px -6px 20px #161616, 0 0 0 0.5px rgba(255,255,255,0.04)",

  glass:
    "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.3)",
};

const HOVER_SHADOWS: Record<NeumorphVariant, string> = {
  flat: "8px 8px 22px #040404, -5px -5px 16px #161616, inset 0 1px 0 rgba(255,255,255,0.05)",

  pressed: "inset 6px 6px 14px #040404, inset -4px -4px 10px #161616",

  floating:
    "16px 16px 36px #030303, -8px -8px 24px #181818, 0 0 0 0.5px rgba(255,255,255,0.06)",

  glass:
    "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.09), inset 0 -1px 0 rgba(0,0,0,0.3)",
};

const RADIUS: Record<string, string> = {
  lg: "0.5rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

// ─── Component ────────────────────────────────────────────────────────

export default function NeumorphCard({
  children,
  variant = "flat",
  interactive = false,
  className = "",
  onClick,
  radius = "2xl",
  accent,
  as: Tag = "div",
}: NeumorphCardProps) {
  const isGlass = variant === "glass";

  const baseStyle: React.CSSProperties = {
    borderRadius: RADIUS[radius],
    boxShadow: SHADOWS[variant],
    backgroundColor: isGlass ? "rgba(255,255,255,0.03)" : "#0a0a0a",
    border: accent
      ? `1px solid ${accent}`
      : isGlass
        ? "1px solid rgba(255,255,255,0.07)"
        : "1px solid rgba(255,255,255,0.04)",
    backdropFilter: isGlass ? "blur(12px)" : undefined,
    WebkitBackdropFilter: isGlass ? "blur(12px)" : undefined,
    position: "relative",
    overflow: "hidden",
  };

  return (
    <motion.div
      // @ts-ignore — as prop untuk semantik HTML yang berbeda
      as={Tag}
      className={className}
      style={baseStyle}
      onClick={onClick}
      whileHover={
        interactive
          ? {
              boxShadow: HOVER_SHADOWS[variant],
              y: variant === "pressed" ? 0 : -3,
              scale: variant === "pressed" ? 0.99 : 1.005,
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
      whileTap={
        interactive
          ? {
              scale: 0.98,
              y: 0,
              boxShadow: SHADOWS.pressed,
              transition: { duration: 0.1 },
            }
          : undefined
      }
      // cursor pointer jika ada onClick
      //   {...(onClick ? { style: { ...baseStyle, cursor: "pointer" } } : {})}
    >
      {/* Subtle inner highlight di tepi atas — menambah efek kedalaman */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {children}
    </motion.div>
  );
}
