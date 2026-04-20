import RevealText from "@/components/ui/RevealText";
import CalendarCard from "@/components/ui/CalendarCard";
import { CountdownTimer } from "@/components/ui/CountDown";

const linkGoogleMap =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.500113037071!2d116.81128621101378!3d-1.2459273574230256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1470e92c1e8cf%3A0xf1c7f4baabb29ad5!2sRDMP%20PROJECT%20BALIKPAPAN!5e0!3m2!1sid!2sid!4v1774458902403!5m2!1sid!2sid";

const goToMap = () => {
  console.log("clicked");
  window.open(linkGoogleMap, "_blank");
};

const DetailVenue = () => {
  return (
    <div className="flex flex-col gap-12 px-8 py-12 justify-center items-center">
      <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-24">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl md:text-4xl italic text-center text-gray-100">
            <RevealText
              text="Akad"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h3>

          <div className="flex justify-between">
            <div className="flex flex-col md:gap-4">
              <h3 className="text-sm md:text-2xl italic text-gray-400">
                <RevealText
                  text="Tanggal"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </h3>

              <h4 className="text-xl md:text-5xl italic text-gray-100">
                <RevealText
                  text="2025.10.12"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </h4>
            </div>

            <div className="flex flex-col md:gap-4">
              <h3 className="text-sm md:text-2xl italic text-gray-400">
                <RevealText
                  text="Waktu"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </h3>

              <h4 className="text-xl md:text-5xl italic text-gray-100">
                <RevealText
                  text="20:10AM"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-3xl md:text-4xl italic text-center text-gray-100">
            <RevealText
              text="Resepsi"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h3>

          <div className="flex justify-between">
            <div className="flex flex-col md:gap-4">
              <h3 className="text-sm md:text-2xl italic text-gray-400">
                <RevealText
                  text="Tanggal"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </h3>

              <h4 className="text-xl md:text-5xl italic text-gray-100">
                <RevealText
                  text="2025.10.12"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </h4>
            </div>

            <div className="flex flex-col md:gap-4">
              <h3 className="text-sm md:text-2xl italic text-gray-400">
                <RevealText
                  text="Waktu"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </h3>

              <h4 className="text-xl md:text-5xl italic text-gray-100">
                <RevealText
                  text="20:10AM"
                  trigger="viewport"
                  mode="sentence"
                  duration={0.8}
                />
              </h4>
            </div>
          </div>
        </div>

        {/* <CalendarCard /> */}

        {/* <div className="flex flex-col gap-4 md:gap-8" onClick={goToMap}>
          <h3 className="text-xl md:text-2xl italic text-gray-400 px-0.5">
            <RevealText
              text="Reception"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h3>
        </div> */}
        <CountdownTimer targetDate={"2026-04-26T08:00:00"} />
        <div className="flex flex-col items-center">
          <h4 className="text-3xl md:text-4xl italict text-center text-gray-100 mb-2">
            <RevealText
              text="Lokasi"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h4>

          <div className="w-full md:w-full h-50 md:h-87.5 lg:h-112.5 rounded-2xl overflow-hidden shadow-lg mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.8865333845747!2d116.94186947496556!3d-1.2383055987498905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTQnMTcuOSJTIDExNsKwNTYnNDAuMCJF!5e0!3m2!1sid!2sid!4v1776674831567!5m2!1sid!2sid"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <a href="https://maps.app.goo.gl/L4tebJBs7Hg1SZ8H9">
            <p className="text-md lg:text-xl text-gray-100 text-center italic mt-2">
              <RevealText
                text="Klik untuk buka Google Maps"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailVenue;
