import RevealText from "../ui/RevealText";
import Image from "next/image";

import { Parisienne } from "next/font/google";
const secondFont = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/Footer.jpg"
        alt="footer"
        width={1000}
        height={1000}
        className="grayscale w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 text-white text-center px-8  ${secondFont.className}`}
        >
          <div className="text-xl md:text-6xl lg:text-8xl">
            <RevealText
              text="Thank you for your attendance and support."
              trigger="viewport"
              duration={0.5}
            />
          </div>
          <div className="text-lg md:text-5xl lg:text-6xl flex flex-col">
            <RevealText text="Love," trigger="viewport" duration={0.5} />
            <RevealText
              text="Cindia & Robby"
              trigger="viewport"
              duration={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
