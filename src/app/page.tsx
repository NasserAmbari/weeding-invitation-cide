"use client";

import { useEffect, useRef, useState } from "react";

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
import Quotes from "@/components/_section/Quotes";

export default function Home() {
  const [reveal, setReveal] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (reveal && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
    }
  }, [reveal]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(console.error);
      }
    }
  };

  return (
    <main className="w-full bg-[#FEF2E8] overflow-x-hidden">
      <Loader onComplete={() => setReveal(true)} />

      <div
        style={{
          opacity: reveal ? 1 : 0,
          transition: "opacity 1400ms ease-in-out",
        }}
      >
        <audio ref={audioRef} loop autoPlay controls className="hidden">
          <source
            src="https://wedding-api.storyofbari.com/uploads/Lagu-Cide.mp3"
            type="audio/mpeg"
          />
          Browser Anda tidak mendukung elemen audio.
        </audio>

        {/* Tombol Musik Floating */}
        <button
          onClick={toggleAudio}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gray-900/80 text-white rounded-full shadow-lg backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all duration-300"
          aria-label="Toggle Music"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="fixed inset-0 z-0">
          <Hero revealed={reveal} />
        </div>

        <div className="h-screen" />

        <div className="relative bg-white">
          <ScrollSnakeLine
            segments={12}
            spread={0.65}
            color="#D2D2D2"
            strokeWidth={1.5}
            seed={7}
          />
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
