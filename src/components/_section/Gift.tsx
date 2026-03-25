import RevealText from "@/components/ui/RevealText";
import Image from "next/image";
import NeumorphCard from "@/components/ui/Neuphorpcard";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { toast } from "sonner";

import { Libre_Baskerville, Geist } from "next/font/google";
import { number } from "motion";

const libre = Libre_Baskerville({
  subsets: ["latin"],
});

const handleClick = async (account: string, numberAccount: string) => {
  try {
    await navigator.clipboard.writeText(numberAccount);

    toast("Account number copied!", {
      description: `${account}, ${numberAccount}`,
      position: "top-center",
      className: `${libre.className}`,
    });
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

const listAccount = [
  { account: "BCA", accountNumber: "23232" },
  { account: "BRI", accountNumber: "23232" },
  { account: "Mandiri", accountNumber: "23232" },
];

const Gift = () => {
  return (
    <div className="flex flex-col gap-20 p-8 py-20 justify-center items-center">
      <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-8">
        <h3 className="text-md md:text-2xl italic text-gray-400 text-center">
          <RevealText
            text="Your blessings are a meaningful gift for the couple. However, if giving is your expression of love, you may use the following feature"
            trigger="viewport"
            mode="sentence"
            duration={0.8}
          />
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listAccount.map((item, index) => (
            <div
              onClick={() => {
                handleClick(item.account, item.accountNumber);
              }}
            >
              <SpotlightCard
                className="custom-spotlight-card bg-[#030712]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h3 className="text-xl md:text-2xl italic text-gray-100 px-0.5">
                  <RevealText
                    text={item.account}
                    trigger="viewport"
                    mode="sentence"
                    duration={0.8}
                  />
                </h3>

                <div>
                  <h4 className="text-2xl md:text-3xl italic text-gray-100">
                    <RevealText
                      text={item.accountNumber}
                      trigger="viewport"
                      mode="sentence"
                      duration={0.8}
                    />
                  </h4>

                  <p className="text-xs text-gray-800 text-end">
                    <RevealText
                      text="Copy to Clipboard"
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
