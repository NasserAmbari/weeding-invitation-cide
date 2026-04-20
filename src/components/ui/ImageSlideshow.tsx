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
  // Dua slot A dan B yang bergantian — cross-fade tanpa kosong
  const [slotA, setSlotA] = useState(0);
  const [slotB, setSlotB] = useState<number | null>(null);
  // Slot mana yang sedang "aktif" (opacity 1)
  const [top, setTop] = useState<"a" | "b">("a");
  // Apakah sedang dalam proses transisi
  const [fading, setFading] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadingRef = useRef(false);
  const currentIndex = useRef(0);
  const topRef = useRef<"a" | "b">("a");

  // ── Cross-fade ke index berikutnya ───────────────────────────────
  const goTo = useCallback(
    (nextIndex: number) => {
      if (fadingRef.current || images.length <= 1) return;
      fadingRef.current = true;
      setFading(true);

      const nextSlot: "a" | "b" = topRef.current === "a" ? "b" : "a";

      // Isi slot yang tidak aktif dengan gambar baru
      if (nextSlot === "b") setSlotB(nextIndex);
      else setSlotA(nextIndex);

      // Tunggu satu frame agar gambar baru ter-render sebelum fade dimulai
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Angkat slot baru ke atas (fade in) — slot lama otomatis fade out
          topRef.current = nextSlot;
          setTop(nextSlot);
          currentIndex.current = nextIndex;

          setTimeout(() => {
            fadingRef.current = false;
            setFading(false);
          }, fadeDuration);
        });
      });
    },
    [fadeDuration, images.length],
  );

  const goNext = useCallback(() => {
    const next = (currentIndex.current + 1) % images.length;
    goTo(next);
  }, [images.length, goTo]);

  const goPrev = useCallback(() => {
    const prev = (currentIndex.current - 1 + images.length) % images.length;
    goTo(prev);
  }, [images.length, goTo]);

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
    resetTimer();
    goPrev();
  };
  const handleNext = () => {
    resetTimer();
    goNext();
  };

  // ── Style tiap slot ───────────────────────────────────────────────
  // Slot yang "top" → opacity 1, slot lain → opacity 0
  // Keduanya selalu ada di DOM — tidak ada mount/unmount saat transisi
  const slotStyle = (slot: "a" | "b"): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    opacity: top === slot ? 1 : 0,
    transition: `opacity ${fadeDuration}ms ease-in-out`,
    zIndex: top === slot ? 1 : 0,
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* ── Slot A ─────────────────────────────────────────────── */}
      <div style={slotStyle("a")}>
        <Image
          src={images[slotA]}
          alt={`slide-a`}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imgClassName}`}
        />
      </div>

      {/* ── Slot B ─────────────────────────────────────────────── */}
      {slotB !== null && (
        <div style={slotStyle("b")}>
          <Image
            src={images[slotB]}
            alt={`slide-b`}
            fill
            sizes="100vw"
            className={`object-cover ${imgClassName}`}
          />
        </div>
      )}

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
