import RevealText from "../ui/RevealText";

const Quotes = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 h-[20vh] text-white">
        <div className="bg-gray-950 w-[90%] md:w-[60%] lg:w-[40%] px-8 md:px-4 py-8 rounded-2xl flex flex-col gap-4">
          <p className="text-sm font-bold md:text-md lg:text-lg text-center">
            <RevealText
              text="وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُوْنَ"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
          <p className="text-sm font-bold md:text-md lg:text-lg text-center">
            <RevealText
              text="Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat"
              duration={0.3}
              stagger={0.15}
              mode="sentence"
              trigger="viewport"
            />
          </p>
          <p className="text-xs md:text-sm lg:text-md text-center italic">
            <RevealText
              text="QS Az-Zariyat ayat 49"
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

export default Quotes;
