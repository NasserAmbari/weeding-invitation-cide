"use client";

import RevealText from "@/components/ui/RevealText";
import { Parisienne, Playfair } from "next/font/google";
import ScrollDown from "../ui/ScrollDown";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const playfair = Playfair({ subsets: ["latin"] });
const parisienne = Parisienne({ subsets: ["latin"], weight: "400" });

interface HeroProps {
  revealed?: boolean;
}

/**
 * Greeting menggunakan playSignal dari parent (revealed).
 * trigger selalu "none" — animasi jalan saat revealed berubah true.
 */
const Greeting = ({ revealed }: { revealed: boolean }) => {
  const searchParams = useSearchParams();
  const to = searchParams.get("to") || "Tamu";

  return (
    <div className="flex flex-col">
      <RevealText
        text={`Hi ${to}`}
        duration={0.3}
        stagger={0.15}
        delay={0.3}
        trigger="none"
        playSignal={revealed}
        mode="sentence"
      />
      <RevealText
        text={`You're invited to celebrate the wedding of`}
        duration={0.3}
        stagger={0.15}
        delay={0.5}
        trigger="none"
        playSignal={revealed}
        mode="sentence"
      />
    </div>
  );
};

const Hero = ({ revealed = false }: HeroProps) => {
  return (
    <div className="w-full h-full flex items-center overflow-hidden">
      <div className="w-full h-full flex items-center overflow-hidden relative">
        <Image
          src="/Hero.webp"
          alt="ring"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative -translate-y-15 lg:translate-y-0 z-20 w-full flex flex-col p-4 md:p-8 text-white gap-8">
          <h1 className="text-center">
            {/*
             * Suspense fallback juga menggunakan trigger="none" + playSignal
             * agar consistent. Saat Greeting belum siap (SSR/hydration),
             * fallback ini yang tampil dengan behavior yang sama.
             */}
            <Suspense
              fallback={
                <RevealText
                  text="Anda diundang untuk merayakan pernikahan"
                  duration={0.3}
                  stagger={0.15}
                  delay={0.5}
                  trigger="none"
                  playSignal={revealed}
                  mode="sentence"
                />
              }
            >
              <Greeting revealed={revealed} />
            </Suspense>
          </h1>

          <div className="w-[90%] md:w-2/4 lg:w-2/5 mx-auto flex flex-col justify-content items-center gap-2">
            <h1
              className={`${parisienne.className} text-8xl lg:text-9xl font-black`}
            >
              <RevealText
                text="Cindia"
                duration={0.3}
                stagger={0.15}
                mode="sentence"
                trigger="none"
                playSignal={revealed}
                delay={0.7}
              />
            </h1>
            <h1
              className={`${parisienne.className} text-8xl lg:text-9xl font-black`}
            >
              <RevealText
                text="&"
                duration={0.3}
                stagger={0.15}
                delay={0.9}
                mode="sentence"
                trigger="none"
                playSignal={revealed}
              />
            </h1>
            <h1
              className={`${parisienne.className} text-8xl lg:text-9xl font-black`}
            >
              <RevealText
                text="Robby"
                duration={0.3}
                stagger={0.15}
                delay={1.1}
                mode="sentence"
                trigger="none"
                playSignal={revealed}
              />
            </h1>
          </div>
        </div>

        <ScrollDown revealed={revealed} />
      </div>

      <div className="relative inset-0 opacity-0">
        <Image
          src="/Hero.webp"
          alt="Hero"
          width={500}
          height={300}
          className="absolute inset-0 object-cover w-auto h-auto"
        />
      </div>

      <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
        <div className="w-full h-full bg-black/50" />
      </div>
    </div>
  );
};

export default Hero;
