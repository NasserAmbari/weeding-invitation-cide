import RevealText from "../ui/RevealText";
import Image from "next/image";

import { Luxurious_Script } from "next/font/google";
const secondFont = Luxurious_Script({
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
          <div className="w-[85%] lg:w-full font-bold text-2xl md:text-8xl text-center whitespace-normal mr-4 lg:mr-0">
            <RevealText
              text="Thank you for your attendance and support."
              trigger="viewport"
              duration={0.5}
            />
          </div>
          <div className="w-[85%] lg:w-full font-bold text-lg md:text-8xl text-center whitespace-normal mr-4 lg:mr-0 ">
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
