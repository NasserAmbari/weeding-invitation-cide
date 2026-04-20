import { useState, useEffect } from "react";
import RevealText from "./RevealText";

// Tipe data untuk properti target tanggal
interface CountdownTimerProps {
  targetDate: string | Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  // Fungsi untuk menghitung sisa waktu
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // Jika waktu sudah habis, kembalikan 0
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect untuk mengupdate timer setiap 1 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Fungsi untuk menambahkan angka 0 di depan jika angka < 10 (misal: 07)
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 text-gray-100">
      <h2 className="text-md md:text-xl text-center mb-8 flex flex-col items-center gap-2">
        <RevealText
          text="Hitungan mundur menuju perayaan cinta kita"
          duration={0.3}
          stagger={0.15}
          delay={0.4}
          mode="sentence"
          trigger="viewport"
        ></RevealText>
      </h2>

      <div className="flex px-4 items-center justify-center gap-3 md:gap-4 text-black">
        <TimeBox value={formatNumber(timeLeft.days)} label="DAYS" />
        <TimeBox value={formatNumber(timeLeft.hours)} label="HOURS" />
        <TimeBox value={formatNumber(timeLeft.minutes)} label="MINUTES" />
        <TimeBox value={formatNumber(timeLeft.seconds)} label="SECONDS" />
      </div>
    </div>
  );
}

// Sub-komponen untuk memecah UI Kotak agar rapi
interface TimeBoxProps {
  value: string;
  label: string;
}

function TimeBox({ value, label }: TimeBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-32 shadow-lg bg-white rounded-md">
      <span
        suppressHydrationWarning
        className="text-xl md:text-2xl font-bold mb-1"
      >
        {value}
      </span>
      <span className="text-[10px] md:text-xs tracking-[0.2em]  mt-1">
        {label}
      </span>
    </div>
  );
}
