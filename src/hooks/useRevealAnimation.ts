"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePageTransition } from "@/contexts/PageTransitionContext";

type AnimState = "below" | "visible" | "above";
type Trigger = "viewport" | "none";

interface UseRevealAnimationOptions {
  trigger?: Trigger;
  threshold?: number;
  playSignal?: unknown; // NEW: when this changes, re-trigger play for trigger="none"
  onPlay: () => void;
  onReset: () => void;
  onSnap: () => void;
}

/**
 * Custom hook yang mengandung scroll state machine untuk animasi reveal.
 * Dapat dipakai ulang di RevealText, RevealImage, RevealForm, dll.
 *
 * Returns: ref yang harus dipasang ke elemen DOM target.
 *
 * Perubahan:
 * - Tambah `playSignal` prop: saat nilainya berubah dan trigger="none",
 *   animasi langsung di-play ulang (reset hasPlayed.current).
 *   Ini memungkinkan parent mengontrol kapan animasi berjalan tanpa
 *   bergantung pada PageTransitionContext.
 */
export function useRevealAnimation<T extends HTMLElement>({
  trigger = "none",
  threshold = 0.3,
  playSignal,
  onPlay,
  onReset,
  onSnap,
}: UseRevealAnimationOptions) {
  const ref = useRef<T>(null);
  const animState = useRef<AnimState>("below");
  const rafId = useRef<number | null>(null);
  const hasPlayed = useRef(false);

  const { isTransitionReady } = usePageTransition();

  const checkPosition = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const isAbove = rect.bottom <= 0;
    const isBelow = rect.top >= viewportHeight;
    const isInView = !isAbove && !isBelow;
    const triggerVisible = rect.top < viewportHeight - rect.height * threshold;

    const current = animState.current;

    if (current === "below" && isInView && triggerVisible) {
      animState.current = "visible";
      onPlay();
      return;
    }
    if (current === "visible" && isAbove) {
      animState.current = "above";
      return;
    }
    if (current === "above" && isInView) {
      animState.current = "visible";
      return;
    }
    if (current === "visible" && isBelow) {
      animState.current = "below";
      onReset();
      return;
    }
    if (current === "above" && isBelow) {
      animState.current = "below";
      onReset();
      return;
    }
    if (current === "below" && isAbove) {
      animState.current = "above";
      onSnap();
      return;
    }
  }, [threshold, onPlay, onReset, onSnap]);

  // Viewport scroll listener — hanya aktif saat trigger="viewport"
  useEffect(() => {
    if (trigger === "viewport") {
      checkPosition();

      const onScroll = () => {
        if (rafId.current !== null) return;
        rafId.current = requestAnimationFrame(() => {
          checkPosition();
          rafId.current = null;
        });
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
        if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      };
    }
  }, [trigger, checkPosition]);

  /**
   * Trigger="none" dengan playSignal:
   * - Saat playSignal berubah ke nilai truthy, reset hasPlayed dan play.
   * - Ini memungkinkan parent (misal: setelah loader selesai) langsung
   *   memicu animasi tanpa menunggu PageTransitionContext.
   * - Fallback ke isTransitionReady jika playSignal tidak diberikan.
   */
  useEffect(() => {
    if (trigger !== "none") return;

    // Jika playSignal diberikan, gunakan itu sebagai trigger utama
    if (playSignal !== undefined) {
      if (!playSignal) {
        // Signal belum aktif — reset agar siap diplay saat aktif
        hasPlayed.current = false;
        return;
      }
      if (hasPlayed.current) return;
      hasPlayed.current = true;
      onPlay();
      return;
    }

    // Fallback: gunakan isTransitionReady dari PageTransitionContext
    if (!isTransitionReady) {
      hasPlayed.current = false;
      return;
    }
    if (hasPlayed.current) return;

    hasPlayed.current = true;
    onPlay();
  }, [trigger, playSignal, isTransitionReady, onPlay]);

  return ref;
}
