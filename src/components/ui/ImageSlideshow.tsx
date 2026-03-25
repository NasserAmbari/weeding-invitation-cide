"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
  fadeDuration?: number;
  className?: string;
  imgClassName?: string;
  overlay?: React.ReactNode;
}

export default function ImageSlideshow({
  images,
  interval = 5000,
  fadeDuration = 1500,
  className = "",
  imgClassName = "",
  overlay,
}: ImageSlideshowProps) {
  const [slotA, setSlotA] = useState(0);
  const [slotB, setSlotB] = useState<number | null>(null);
  const [activeSlot, setActiveSlot] = useState<"a" | "b">("a");

  const indexRef = useRef(0);
  const activeRef = useRef<"a" | "b">("a");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    const tick = () => {
      indexRef.current = (indexRef.current + 1) % images.length;
      const next = indexRef.current;
      const goingTo: "a" | "b" = activeRef.current === "a" ? "b" : "a";

      if (goingTo === "b") setSlotB(next);
      else setSlotA(next);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          activeRef.current = goingTo;
          setActiveSlot(goingTo);
        });
      });

      timerRef.current = setTimeout(tick, interval);
    };

    timerRef.current = setTimeout(tick, interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Use inline style for positioning so it's never overridden by Tailwind conflicts
  const containerStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
  };

  const slotStyle = (slot: "a" | "b"): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    opacity: activeSlot === slot ? 1 : 0,
    transition: `opacity ${fadeDuration}ms ease-in-out`,
  });

  return (
    <div style={containerStyle} className={className}>
      {/* Slot A */}
      <div style={slotStyle("a")}>
        <Image
          src={images[slotA]}
          alt="slideshow"
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imgClassName}`}
        />
      </div>

      {/* Slot B */}
      {slotB !== null && (
        <div style={slotStyle("b")}>
          <Image
            src={images[slotB]}
            alt="slideshow"
            fill
            sizes="100vw"
            className={`object-cover ${imgClassName}`}
          />
        </div>
      )}

      {overlay && (
        <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
          {overlay}
        </div>
      )}
    </div>
  );
}
