"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

const PHOTOS = [
  { src: "/Hero.png", alt: "Cindy & Roby" },
  { src: "/Hero2.png", alt: "Together" },
  { src: "/Hero3.png", alt: "A moment" },
  { src: "/Hero.png", alt: "In love" },
  { src: "/Hero2.png", alt: "Forever" },
];

const LAYOUTS = [
  { left: "52%", top: "4%", rotate: 2, w: 240, h: 300, z: 2 },
  { left: "8%", top: "16%", rotate: -3, w: 260, h: 330, z: 3 },
  { left: "54%", top: "34%", rotate: 1, w: 260, h: 320, z: 2 },
  { left: "5%", top: "55%", rotate: -2, w: 230, h: 290, z: 3 },
  { left: "46%", top: "68%", rotate: 3, w: 250, h: 310, z: 2 },
];

const STORY_TEXT = `We are pleased to announce that we will be hosting a wedding. The place is Kudan Kaikan Terrace in Tokyo. It is early in the morning, but we are looking forward to seeing you all there.

We are so grateful for all the love and support we have received. Please join us as we celebrate the beginning of our new life together.`;

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const open = useCallback((i: number) => setLightbox(i), []);
  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null,
      ),
    [],
  );
  const next = useCallback(
    () => setLightbox((i) => (i !== null ? (i + 1) % PHOTOS.length : null)),
    [],
  );

  return (
    <>
      <div
        className="relative w-full bg-[#FEF2E8]"
        style={{ minHeight: "200vh", paddingBottom: "120px" }}
      >
        {/* Story text behind images */}
        <div className="relative z-1 px-10 pt-20 max-w-[42%] select-none">
          {STORY_TEXT.split("\n\n").map((para, i) => (
            <p
              key={i}
              className={`${playfair.className} text-[#1a1a1a]/70 mb-10`}
              style={{ fontSize: "clamp(14px, 1.4vw, 18px)", lineHeight: 2 }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Scattered polaroid photos */}
        {PHOTOS.map((photo, i) => {
          const l = LAYOUTS[i] ?? LAYOUTS[0];
          return (
            <button
              key={i}
              onClick={() => open(i)}
              className="absolute group cursor-pointer focus:outline-none"
              style={{
                left: l.left,
                top: l.top,
                width: l.w,
                zIndex: l.z + 1,
                transform: `rotate(${l.rotate}deg)`,
                transition:
                  "transform 0.4s cubic-bezier(0.16,1,0.3,1), z-index 0s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = `rotate(${l.rotate * 0.2}deg) scale(1.04)`;
                el.style.zIndex = "50";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = `rotate(${l.rotate}deg) scale(1)`;
                el.style.zIndex = String(l.z + 1);
              }}
            >
              <div
                className="bg-white shadow-[0_6px_28px_rgba(0,0,0,0.13)]"
                style={{ width: l.w, height: l.h, padding: "7px 7px 28px" }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[10px] tracking-[0.3em] uppercase">
                      View
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-9999 bg-black/92 flex items-center justify-center"
          onClick={close}
        >
          <button
            className="absolute top-6 right-8 text-white/60 hover:text-white text-4xl font-thin leading-none z-10"
            onClick={close}
          >
            ×
          </button>
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 p-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 4L7 12L15 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 p-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 4L17 12L9 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            className="relative"
            style={{ width: "min(82vw, 580px)", height: "min(82vh, 740px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[lightbox].src}
              alt={PHOTOS[lightbox].alt}
              fill
              className="object-contain"
              sizes="80vw"
            />
          </div>
          <p className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/35 text-xs tracking-[0.25em]">
            {lightbox + 1} / {PHOTOS.length}
          </p>
        </div>
      )}
    </>
  );
}

{
  /* <ImageSlideshow
        images={IMAGES}
        interval={5000}
        fadeDuration={1500}
        className="absolute inset-0"
        imgClassName="grayscale"
        overlay={<div className="w-full h-full bg-black/50" />}
      /> */
}
