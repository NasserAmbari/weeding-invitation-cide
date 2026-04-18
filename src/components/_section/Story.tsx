import RevealText from "@/components/ui/RevealText";
import Image from "next/image";

const Story = () => {
  return (
    <div className="min-h-screen w-full p-4 md:p-8 py-20 flex flex-col justify-center text-gray-950">
      <div className="flex flex-col">
        <p className="text-4xl font-bold md:text-6xl italic">
          <RevealText
            text="Yes"
            duration={0.3}
            stagger={0.15}
            mode="sentence"
            trigger="viewport"
          />
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-4xl font-bold md:text-6xl italic">
          <RevealText
            text="We're"
            duration={0.3}
            stagger={0.15}
            mode="sentence"
            trigger="viewport"
          />
        </p>
      </div>

      <div className="w-full flex flex-col  items-center">
        <Image
          src="/Ring.webp"
          alt="ring"
          width={500}
          height={300}
          className="w-[60%] md:hidden h-auto"
        />
        <Image
          src="/Ring2.webp"
          alt="ring"
          width={500}
          height={300}
          className="hidden md:block md:w-[60%] lg:w-[60%] h-auto"
        />
      </div>

      <div className="flex flex-col items-end">
        <p className="text-4xl font-bold md:text-6xl italic">
          <RevealText
            text="Getting"
            duration={0.3}
            stagger={0.15}
            mode="sentence"
            trigger="viewport"
          />
        </p>
      </div>
      <div className="flex flex-col items-end ">
        <p className="text-4xl font-bold md:text-6xl italic">
          <RevealText
            text="Married"
            duration={0.3}
            stagger={0.15}
            mode="sentence"
            trigger="viewport"
          />
        </p>
      </div>
    </div>
  );
};

export default Story;
