"use client";

import RevealText from "@/components/ui/RevealText";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import { Playfair } from "next/font/google";
import ScrollDown from "../ui/ScrollDown";
import Image from "next/image";

const playfair = Playfair({ subsets: ["latin"] });

const IMAGES = ["/Hero.webp", "/Hero2.webp", "/Hero3.webp"];

interface HeroProps {
  revealed?: boolean;
}

const Hero = ({ revealed = false }: HeroProps) => {
  const trigger = revealed ? "none" : "viewport";
  console.log(trigger);

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
        <div className="relative -translate-y-10 lg:translate-y-0 z-20 w-full h-[50vh] md:h-[55vh] lg:h-[70vh] flex flex-col p-4 md:p-8 text-white gap-8">
          <h1 className="text-center">
            <RevealText
              text="You're Invited to Celebrate The Wedding of"
              duration={0.3}
              stagger={0.15}
              delay={8.0}
              trigger={trigger}
              mode="sentence"
            />
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
