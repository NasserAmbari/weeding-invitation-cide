import RevealText from "@/components/ui/RevealText";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col py-12 gap-40 text-black justify-center items-center mx-auto">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex">
          <h3 className="w-[50%] lg:w-full font-bold text-6xl md:text-8xl ">
            <RevealText
              text="The Grooms"
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
              src="/Woman1.png"
              alt="Woman 2"
              width={500}
              height={300}
              className="mt-20"
            />
            <Image
              src="/Woman3.png"
              alt="Woman 2"
              width={500}
              height={300}
              className="mt-20 hidden"
            />
          </div>
          <div className="w-[60%] flex flex-col justify-between">
            <Image
              src="/Woman2.png"
              alt="Woman 3"
              width={500}
              height={300}
              className="col-span-1"
            />
            <div className="md:col-span-1 flex flex-col mt-4 md:mt-12">
              <h3 className="font-bold text-4xl md:text-6xl">
                <RevealText
                  text={`Robi`}
                  duration={0.3}
                  stagger={0.15}
                  delay={0.4}
                  mode={"sentence"}
                  trigger="viewport"
                />
              </h3>

              <h3 className="text-sm md:text-2xl italictext-gray-500 mt-4">
                <RevealText
                  text={`Born in 1995 in Hiroshima Prefecture After graduating from
                university, began her career as a sales representative at a
                major homebuilder Later`}
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

      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col items-end">
          <h3 className="w-[70%] lg:w-full font-bold text-6xl md:text-8xl text-end whitespace-normal">
            <RevealText
              text={`The Brides`}
              duration={0.3}
              stagger={0.15}
              delay={0.4}
              mode={"sentence"}
              trigger="viewport"
            />
          </h3>
        </div>

        <div className="flex flex-row gap-4">
          <div className="w-[60%]">
            <Image
              src="/Woman3.png"
              alt="Woman 3"
              width={1000}
              height={1000}
              className="col-span-1"
            />
            <div className="md:col-span-1 flex flex-col mt-4 md:mt-12">
              <h3 className="font-bold text-4xl md:text-6xl">
                <RevealText
                  text={`Cindia`}
                  duration={0.3}
                  stagger={0.15}
                  delay={0.4}
                  mode={"sentence"}
                  trigger="viewport"
                />
              </h3>

              <h3 className="text-sm md:text-2xl italictext-gray-500 mt-4">
                <RevealText
                  text={`Born in 1995 in Hiroshima Prefecture After graduating from
                university, began her career as a sales representative at a
                major homebuilder Later`}
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
            {/* <Image src="/Woman2.png" alt="Woman 2" width={500} height={300} /> */}
            <Image
              src="/Woman1.png"
              alt="Woman 3"
              width={1000}
              height={1000}
              className="col-span-1 mt-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
