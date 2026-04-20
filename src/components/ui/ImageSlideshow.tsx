"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
  fadeDuration?: number;
  className?: string;
  imgClassName?: string;
  overlay?: React.ReactNode;
  showArrows?: boolean;
}

export default function ImageSlideshow({
  images,
  interval = 5000,
  fadeDuration = 1000,
  className = "",
  imgClassName = "",
  overlay,
  showArrows = true,
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // ── Autoplay ─────────────────────────────────────────────────────
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(goNext, interval);
  }, [goNext, interval]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  const handlePrev = () => {
    goPrev();
    resetTimer();
  };

  const handleNext = () => {
    goNext();
    resetTimer();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* ── Render Semua Gambar ───────────────────────────────────── */}
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: `opacity ${fadeDuration}ms ease-in-out`,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`slide-${index}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover ${imgClassName}`}
          />
        </div>
      ))}

      {/* Spacer agar container punya tinggi mengikuti className ─── */}
      <div className="relative w-full h-full invisible" aria-hidden />

      {/* ── Overlay ────────────────────────────────────────────── */}
      {overlay && <div className="absolute inset-0 z-10">{overlay}</div>}

      {/* ── Arrow navigation ───────────────────────────────────── */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/30 hover:bg-black/55 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/30 hover:bg-black/55 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}
