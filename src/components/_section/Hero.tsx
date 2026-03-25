"use client";

import RevealText from "@/components/ui/RevealText";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import { Playfair } from "next/font/google";
import ScrollDown from "../ui/ScrollDown";

const playfair = Playfair({ subsets: ["latin"] });

const IMAGES = ["/Hero.png", "/Hero2.png", "/Hero3.png"];

interface HeroProps {
  revealed?: boolean;
}

const Hero = ({ revealed = false }: HeroProps) => {
  const trigger = revealed ? "instant" : "none";

  return (
    <div className="w-full h-full flex items-center overflow-hidden">
      <ImageSlideshow
        images={IMAGES}
        interval={5000}
        fadeDuration={1500}
        className="absolute inset-0"
        imgClassName="grayscale"
        overlay={<div className="w-full h-full bg-black/50" />}
      />

      {/* Main text content */}
      <div className="relative -translate-y-10 lg:translate-y-0 z-10 w-full h-[60vh] md:h-[55vh] lg:h-[70vh] flex flex-col p-4 md:p-8 text-white gap-8">
        <h1 className="text-center">
          <RevealText
            text="You're Invited to Celebrate The Wedding of"
            duration={0.3}
            stagger={0.15}
            delay={8.0}
            mode="sentence"
            trigger="viewport"
          />
        </h1>

        <div className="w-[90%] md:w-2/4 lg:w-2/5 mx-auto flex flex-col gap-2">
          <h1 className={`${playfair.className} text-8xl lg:text-9xl`}>
            <RevealText
              text="Cindy"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
              delay={8.2}
            />
          </h1>

          <h1 className={`${playfair.className} text-8xl lg:text-9xl text-end`}>
            <RevealText
              text="And"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
              delay={8.4}
            />
          </h1>

          <h1
            className={`${playfair.className} text-8xl lg:text-9xl text-center`}
          >
            <RevealText
              text="Roby"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
              delay={8.6}
            />
          </h1>
        </div>
      </div>
      <ScrollDown revealed={revealed} />
    </div>
  );
};

export default Hero;
