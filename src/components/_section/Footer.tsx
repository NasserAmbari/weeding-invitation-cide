import RevealText from "../ui/RevealText";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* Gambar */}
      <Image
        src="/Footer.jpg"
        alt="footer"
        width={1000}
        height={1000}
        className="grayscale w-full h-full object-cover"
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Teks di tengah */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white text-center px-8 text-3xl">
        <RevealText text="Thank You" trigger="viewport" duration={0.5} />
        <RevealText
          text="For Your Attendance And Support"
          trigger="viewport"
          duration={0.5}
        />
      </div>
    </div>
  );
};

export default Footer;
