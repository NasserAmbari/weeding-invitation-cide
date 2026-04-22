import RevealText from "@/components/ui/RevealText";
import ImageSlideshow from "@/components/ui/ImageSlideshow";

const IMAGES = [
  "/Slideshow_1.webp",
  "/Slideshow_2.webp",
  "/Slideshow_3.webp",
  "/Slideshow_4.webp",
];

const Story = () => {
  return (
    <div className="w-full px-4 flex flex-col justify-center text-gray-950">
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

          <div className="w-full flex flex-col items-center justify-center overflow-hidden my-3">
            <ImageSlideshow
              images={IMAGES}
              interval={2000}
              fadeDuration={1500}
              showArrows={true}
              className="w-[90%] md:w-[70%] h-[30vh] md:h-[40vh] lg:h-[50vh]"
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
      </div>
    </div>
  );
};

export default Story;
