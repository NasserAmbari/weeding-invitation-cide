"use client";

import { useState } from "react";

import Hero from "@/components/_section/Hero";
import Story from "@/components/_section/Story";
import Gallery from "@/components/_section/Gallery";
import Loader from "@/components/Loader";
import AboutUs from "@/components/_section/AboutUs";
import DetailVenue from "@/components/_section/DetailVenue";
import ScrollSnakeLine from "@/components/ui/Snakeline";
import Gift from "@/components/_section/Gift";
import RSVP from "@/components/_section/RSVP";
import Footer from "@/components/_section/Footer";
import { CountdownTimer } from "@/components/ui/CountDown";
import Quotes from "@/components/_section/Quotes";

export default function Home() {
  const [reveal, setReveal] = useState(true);

  return (
    <main className="w-full bg-[#FEF2E8] overflow-x-hidden">
      {/* <Loader onComplete={() => setReveal(true)} /> */}

      <div
        style={{
          opacity: reveal ? 1 : 0,
          transition: "opacity 1400ms ease-in-out",
        }}
      >
        <div className="fixed inset-0 z-0">
          <Hero revealed={reveal} />
        </div>

        <div className="h-screen" />

        <div className="relative bg-white">
          {/* <ScrollSnakeLine
            segments={12}
            spread={0.65}
            color="#D2D2D2"
            strokeWidth={1.5}
            seed={7}
          /> */}
          <div className="flex flex-col gap-40 py-24">
            <Story />
            <Quotes />
            <AboutUs />
          </div>
        </div>

        {/* DetailVenue after Gallery */}
        <div className="relative z-10  bg-gray-950">
          <div className="flex flex-col gap-8">
            <DetailVenue />
            {/* <CountdownTimer targetDate={"2026-04-26T08:00:00"} /> */}
            <Gift />
            <RSVP />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
