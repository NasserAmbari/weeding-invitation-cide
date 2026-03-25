import RevealText from "@/components/ui/RevealText";

const linkGoogleMap =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.500113037071!2d116.81128621101378!3d-1.2459273574230256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1470e92c1e8cf%3A0xf1c7f4baabb29ad5!2sRDMP%20PROJECT%20BALIKPAPAN!5e0!3m2!1sid!2sid!4v1774458902403!5m2!1sid!2sid";

const goToMap = () => {
  console.log("clicked");
  window.open(linkGoogleMap, "_blank");
};

const DetailVenue = () => {
  return (
    <div className="flex flex-col gap-32 p-8 py-20 justify-center items-center">
      <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-12">
        <div className="flex flex-col gap-4 md:gap-8">
          <h3 className="text-xl md:text-2xl italic text-gray-400">
            <RevealText
              text="Date"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h3>

          <h4 className="text-3xl md:text-5xl italic text-gray-100 text-end">
            <RevealText
              text="2025.10.12"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:gap-8" onClick={goToMap}>
          <h3 className="text-xl md:text-2xl italic text-gray-400 px-0.5">
            <RevealText
              text="Reception"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h3>

          <div className="div">
            <h4 className="text-3xl md:text-5xl italic text-gray-100 text-end">
              <RevealText
                text="Dimana aja deh"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </h4>

            <p className="text-xs text-gray-800 text-end">
              <RevealText
                text="Click Here to Open Map"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <h3 className="text-xl md:text-2xl italic text-gray-400">
            <RevealText
              text="Jam"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h3>

          <h4 className="text-3xl md:text-5xl italic text-gray-100 text-end">
            <RevealText
              text="20:10AM"
              trigger="viewport"
              mode="sentence"
              duration={0.8}
            />
          </h4>
        </div>

        {/* <div className="w-full h-[200px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.500113037071!2d116.81128621101378!3d-1.2459273574230256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1470e92c1e8cf%3A0xf1c7f4baabb29ad5!2sRDMP%20PROJECT%20BALIKPAPAN!5e0!3m2!1sid!2sid!4v1774458902403!5m2!1sid!2sid"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div> */}

        {/* <p className="text-xs text-gray-500 italic tracking-wide text-center mt-8">
          Reception will be held after the ceremony. We kindly ask all attendees
          to proceed directly to the ceremony venue.
        </p> */}
      </div>
    </div>
  );
};

export default DetailVenue;
