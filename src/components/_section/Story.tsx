import RevealText from "@/components/ui/RevealText";
import Image from "next/image";

const Story = () => {
  return (
    <div className="min-h-screen w-full px-4 pt-20 lex flex-col justify-center text-gray-950">
      <div className="flex flex-col">
        <div>
          <div className="m-auto w-[90%] lg:w-[70%]">
            <div>
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
            </div>
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
              className="hidden md:block md:w-[70%] lg:w-[50%] h-auto"
            />
          </div>

          <div className="m-auto w-[90%] lg:w-[70%]">
            <div>
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
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 h-[60vh]">
          <p className="text-md font-bold md:text-2xl md:w-[60%] text-center">
            <RevealText
              text="We Found Love Dua hati, dua perjalanan, dipertemukan dalam satu tujuan.
        Dengan penuh rasa syukur, kami mengundang Anda untuk menjadi bagian dari
        hari bahagia kami "
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
          <p className="text-xs md:text-xl text-center ">
            <RevealText
              text="Robby And Cindia"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
