import RevealText from "@/components/ui/RevealText";
import Image from "next/image";

import { Parisienne } from "next/font/google";
const secondFont = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

const AboutUs = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-16 lg:gap-16 text-black justify-center items-center mx-auto">
      <div className="flex flex-col" id="greeting-section">
        <div className="flex flex-col justify-around px-4">
          <p className="text-xs font-bold md:text-2xl text-center">
            <RevealText
              text={"Assalamu’alaikum"}
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>

          <p className="text-xs font-bold md:text-xl text-center">
            <RevealText
              text="Warahmatullahi Wabarakatuh"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>

          <p className="text-xs md:text-2xl text-center">
            <RevealText
              text={"Dengan rahmat Allah SWT, kami mengundang"}
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>

          <p className="text-xs md:text-xl text-center">
            <RevealText
              text="Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan kami:"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-30 lg:gap-40">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <h3
              className={`w-[80%] lg:w-full font-bold text-6xl md:text-8xl ml-4 lg:ml-0 ${secondFont.className} font-bold`}
            >
              <RevealText
                text="The Bride"
                duration={0.3}
                stagger={0.15}
                delay={0.4}
                mode="sentence"
                trigger="viewport"
              />
            </h3>
          </div>

          <div className="flex flex-row gap-4">
            <div className="w-[40%] flex flex-col justify-between">
              <Image
                src="/Cindia/1.webp"
                alt="Cindia 1"
                width={500}
                height={300}
                className="mt-10 w-auto h-auto"
              />
            </div>
            <div className="w-[60%]">
              <Image
                src="/Cindia/2.webp"
                alt="Cindia 2"
                width={500}
                height={300}
                className="col-span-1 w-auto h-auto"
              />
              <div className="md:col-span-1 flex flex-col mt-4 md:mt-12">
                <h3
                  className={`font-bold text-3xl md:text-6xl ${secondFont.className} font-bold`}
                >
                  <RevealText
                    text={`Cindia Dwiseptira Rikaren`}
                    duration={0.3}
                    stagger={0.15}
                    delay={0.4}
                    mode={"sentence"}
                    trigger="viewport"
                  />
                </h3>

                <h4 className="text-xs md:text-2xl text-gray-600">
                  <RevealText
                    text={`18.09.1999`}
                    duration={0.3}
                    stagger={0.15}
                    delay={0.4}
                    mode={"sentence"}
                    trigger="viewport"
                  />
                </h4>

                <h3 className="text-[8px] md:text-2xl text-gray-500 mt-2">
                  <RevealText
                    text={`Putri Bungsu Bpk Sukardiansyah & Ibu Zalrita Retno Dewi`}
                    duration={0.3}
                    stagger={0.15}
                    delay={0.4}
                    mode={"sentence"}
                    trigger="viewport"
                  />
                </h3>
              </div>
            </div>
            <div className="col-start-2"></div>
          </div>
        </div>

        {/* <div className="w-full flex justify-center">
          <Image
            src="/Ring.png"
            alt="ring"
            width={200}
            height={100}
            priority
            className="w-auto h-auto"
          />
        </div> */}

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col items-end gap-4">
            <h3
              className={`w-[70%] lg:w-full font-bold text-6xl md:text-8xl text-end whitespace-normal mr-4 lg:mr-0 ${secondFont.className} font-bold`}
            >
              <RevealText
                text={`The Groom`}
                duration={0.3}
                stagger={0.15}
                delay={0.4}
                mode={"sentence"}
                trigger="viewport"
              />
            </h3>

            <div className="flex flex-row gap-4 ">
              <div className="w-[60%] ">
                <Image
                  src="/Robby/2.webp"
                  alt="Robby 2"
                  width={1000}
                  height={1000}
                  className="col-span-1 w-auto h-auto"
                />
                <div className="md:col-span-1 flex flex-col mt-4 md:mt-12 ml-4">
                  <h3
                    className={`font-bold text-3xl md:text-6xl ${secondFont.className} font-black`}
                  >
                    <RevealText
                      text={`Robby Bagus Setiawan`}
                      duration={0.3}
                      stagger={0.15}
                      delay={0.4}
                      mode={"sentence"}
                      trigger="viewport"
                    />
                  </h3>

                  <h4 className="text-xs md:text-2xl text-gray-600">
                    <RevealText
                      text={`10.08.1999`}
                      duration={0.3}
                      stagger={0.15}
                      delay={0.4}
                      mode={"sentence"}
                      trigger="viewport"
                    />
                  </h4>

                  <h3 className="text-[8px] md:text-2xl text-gray-500 mt-1">
                    <RevealText
                      text={`Putra Bungsu Bpk Amir & Ibu Suwarsih`}
                      duration={0.3}
                      stagger={0.15}
                      delay={0.4}
                      mode={"sentence"}
                      trigger="viewport"
                    />
                  </h3>
                </div>
              </div>
              <div className="w-[40%] flex flex-col justify-between">
                <Image
                  src="/Robby/1.webp"
                  alt="Robby 1"
                  width={1000}
                  height={1000}
                  className="col-span-1 mt-10 w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
