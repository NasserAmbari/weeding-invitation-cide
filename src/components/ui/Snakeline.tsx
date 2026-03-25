"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollSnakeLineProps {
  segments?: number;
  spread?: number;
  color?: string;
  strokeWidth?: number;
  seed?: number;
  className?: string;
}

function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildPath(
  w: number,
  h: number,
  segments: number,
  spread: number,
  seed: number,
): string {
  if (w === 0 || h === 0) return "";
  const rng = makeRng(seed);
  let x = w * (0.3 + rng() * 0.4);
  const points: { x: number; y: number }[] = [{ x, y: 0 }];
  const segH = h / segments;
  for (let i = 1; i <= segments; i++) {
    const y = i * segH;
    const delta = (rng() - 0.5) * 2 * spread * w;
    x = Math.min(w * 0.92, Math.max(w * 0.08, x + delta));
    points.push({ x, y });
  }
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x.toFixed(1)} ${cpY.toFixed(1)}, ${curr.x.toFixed(1)} ${cpY.toFixed(1)}, ${curr.x.toFixed(1)} ${curr.y.toFixed(1)}`;
  }
  return d;
}

export default function ScrollSnakeLine({
  segments = 8,
  spread = 0.4,
  color = "#B1B1B1",
  strokeWidth = 1.5,
  seed = 42,
  className = "",
}: ScrollSnakeLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      setSize({ w: e.contentRect.width, h: e.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      if (len > 0) setPathLength(len);
    }
  }, [size]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      setProgress(Math.min(1, Math.max(0, traveled / total)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathD = buildPath(size.w, size.h, segments, spread, seed);
  const dashOffset = pathLength > 0 ? pathLength * (1 - progress) : pathLength;

  return (
    <div
      ref={containerRef}
      // Key fix: pointer-events-none + absolute inset-0 BUT z must be above sticky children
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    >
      {size.w > 0 && size.h > 0 && (
        <svg
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          fill="none"
          className="absolute inset-0"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Ghost path */}
          <path
            d={pathD}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            opacity={0.07}
          />
          {/* Animated path */}
          <path
            ref={pathRef}
            d={pathD}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            style={{
              strokeDasharray: pathLength || undefined,
              strokeDashoffset: dashOffset || undefined,
            }}
          />
        </svg>
      )}
    </div>
  );
}
