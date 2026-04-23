import RevealText from "@/components/ui/RevealText";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { toast } from "sonner";

import { Libre_Baskerville, Geist } from "next/font/google";
import { number } from "motion";

const libre = Libre_Baskerville({
  subsets: ["latin"],
});

import { Luxurious_Script } from "next/font/google";
const secondFont = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
});

const handleClick = async (account: string, numberAccount: string) => {
  try {
    await navigator.clipboard.writeText(numberAccount);

    toast("Nomor Rekening telah di Copy", {
      description: `${account}, ${numberAccount}`,
      position: "top-center",
      className: `${libre.className}`,
    });
  } catch (err) {
    console.error("Gagal di Copy", err);
  }
};

const listAccount = [
  {
    account: "BCA",
    accountNumber: "5705067934",
    accountName: "Cindia Dwiseptira Rikaren",
  },
];

const Gift = () => {
  return (
    <div className="flex flex-col gap-20 px-8 py-12 justify-center items-center">
      <div className="w-full md:w-[90%] lg:w-[60%] flex flex-col gap-4">
        <h4
          className={`text-5xl md:text-7xl italic text-center font-black whitespace-normal text-gray-100 mb-2 ${secondFont.className}`}
        >
          <RevealText
            text="Gift"
            trigger="viewport"
            mode="sentence"
            duration={0.8}
          />
        </h4>

        <h4 className="text-sm md:text-md italic text-gray-400 text-center">
          <RevealText
            text="With all due respect, if you're intended to give a token of love to us, you can do so via:"
            trigger="viewport"
            mode="sentence"
            duration={0.8}
          />
        </h4>

        <div className="grid grid-cols-1 w-full md:w-[90%] lg:w-[60%]  self-center">
          {listAccount.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                handleClick(item.account, item.accountNumber);
              }}
            >
              <SpotlightCard
                className="custom-spotlight-card bg-[#030712]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-xl italic text-gray-100 px-0.5">
                    <RevealText
                      text={`${item.account} `}
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </h3>
                  <h3 className="text-sm md:text-xl italic text-gray-100 px-0.5">
                    <RevealText
                      text={`A.n ${item.accountName}`}
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </h3>
                </div>

                <div>
                  <h4 className="text-2xl md:text-3xl italic text-gray-100">
                    <RevealText
                      text={item.accountNumber}
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </h4>

                  <p className="text-sm text-gray-600 text-end">
                    <RevealText
                      text="Klik untuk Copy"
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gift;
