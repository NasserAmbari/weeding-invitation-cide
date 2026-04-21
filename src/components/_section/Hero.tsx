"use client";

import RevealText from "@/components/ui/RevealText";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import { Playfair } from "next/font/google";
import ScrollDown from "../ui/ScrollDown";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const playfair = Playfair({ subsets: ["latin"] });

const IMAGES = ["/Hero.webp", "/Hero2.webp", "/Hero3.webp"];

interface HeroProps {
  revealed?: boolean;
}

const Greeting = ({ trigger }: { trigger: "none" | "viewport" }) => {
  const searchParams = useSearchParams();
  const to = searchParams.get("to") || "Tamu";

  return (
    <div className="flex flex-col">
      <RevealText
        text={`Hallo ${to}`}
        duration={0.3}
        stagger={0.15}
        delay={8.0}
        trigger={trigger}
        mode="sentence"
      />
      <RevealText
        text={`Anda diundang untuk merayakan pernikahan`}
        duration={0.3}
        stagger={0.15}
        delay={8.0}
        trigger={trigger}
        mode="sentence"
      />
    </div>
  );
};

const Hero = ({ revealed = false }: HeroProps) => {
  const trigger = revealed ? "none" : "viewport";

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
            <Suspense
              fallback={
                <RevealText
                  text="Anda diundang untuk merayakan pernikahan"
                  duration={0.3}
                  stagger={0.15}
                  delay={8.0}
                  trigger={trigger}
                  mode="sentence"
                />
              }
            >
              <Greeting trigger={trigger} />
            </Suspense>
          </h1>

          <div className="w-[90%] md:w-2/4 lg:w-2/5 mx-auto flex flex-col justify-content items-center gap-2">
            <h1
              className={`${playfair.className} text-8xl lg:text-9xl font-black`}
            >
              <RevealText
                text="Cindia"
                duration={0.3}
                stagger={0.15}
                mode="sentence"
                trigger={trigger}
                delay={8.2}
              />
            </h1>
            <h1
              className={`${playfair.className} text-8xl lg:text-9xl font-black`}
            >
              <RevealText
                text="&"
                duration={0.3}
                stagger={0.15}
                delay={8.4}
                mode="sentence"
                trigger={trigger}
              />
            </h1>
            <h1
              className={`${playfair.className} text-8xl lg:text-9xl font-black`}
            >
              <RevealText
                text="Robby"
                duration={0.3}
                stagger={0.15}
                delay={8.6}
                mode="sentence"
                trigger={trigger}
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
