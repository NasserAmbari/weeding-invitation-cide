"use client";

import { useState, useEffect } from "react";
import RevealText from "@/components/ui/RevealText";
import { createRSVP } from "@/service/api";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

type AttendanceStatus = "Hadir" | "Tidak Hadir" | "Tentative";

interface RSVPMessage {
  fullname: string;
  message: string;
  attendance: string;
}

const getBadgeStyle = (status: string) => {
  switch (status) {
    case "Hadir":
      return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    case "Tidak Hadir":
      return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    case "Tentative":
      return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    default:
      return "text-gray-400 bg-neutral-800 border-neutral-700";
  }
};

const RSVP = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    attendance: "Hadir" as AttendanceStatus,
    message: "",
  });
  const [messages, setMessages] = useState<RSVPMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(API_BASE_URL + "/api/rsvpSecond/2/somedata");
        console.log(API_BASE_URL);
        const json = await res.json();
        const dataArray = Array.isArray(json) ? json : json.data || [];
        setMessages(dataArray.slice(0, 4));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await createRSVP(formData);
      if (result.success) {
        setMessages((prev) => {
          const newMsg = {
            fullname: formData.fullname,
            message: formData.message,
            attendance: formData.attendance,
          };
          return [newMsg, ...prev].slice(0, 4);
        });
        setShowSuccessOverlay(true);
        setFormData({ fullname: "", attendance: "Hadir", message: "" });
        setTimeout(() => {
          setShowSuccessOverlay(false);
        }, 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 px-8 py-12 justify-center items-center w-full">
      {showSuccessOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-gray-900 p-8 rounded-2xl flex flex-col items-center gap-4 border border-gray-700 shadow-2xl">
            <svg
              className="w-16 h-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p className="text-xl text-gray-100 italic">
              RSVP Berhasil Terkirim!
            </p>
          </div>
        </div>
      )}

      <div className="w-full md:w-[90%] lg:w-[60%] flex flex-col gap-8">
        <h3 className="text-3xl md:text-4xl italic text-center text-gray-100">
          <RevealText
            text="RSVP"
            trigger="viewport"
            mode="sentence"
            duration={0.8}
          />
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 text-gray-200"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm md:text-lg italic text-gray-400">
              <RevealText
                text="Name"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </label>
            <input
              type="text"
              required
              value={formData.fullname}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
              className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none py-2 text-lg transition-colors placeholder:text-gray-700"
              placeholder="Nama kamu"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm md:text-lg italic text-gray-400">
              <RevealText
                text="Kehadiran"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </label>
            <select
              value={formData.attendance}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  attendance: e.target.value as AttendanceStatus,
                })
              }
              className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none py-2 text-lg transition-colors [&>option]:bg-gray-900"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
              <option value="Tentative">Tentative</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm md:text-lg italic text-gray-400">
              <RevealText
                text="Message"
                trigger="viewport"
                mode="sentence"
                duration={0.8}
              />
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none py-2 text-lg transition-colors resize-none placeholder:text-gray-700"
              placeholder="Tinggalkan pesan..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 flex items-center justify-center gap-2 py-3 px-8 border border-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 rounded-full w-fit self-center italic disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Mengirim...
              </>
            ) : (
              "Send RSVP"
            )}
          </button>
        </form>
      </div>

      {/* Messages Section */}
      <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-8 mt-12">
        <h3 className="text-2xl md:text-3xl italic text-center text-gray-100">
          <RevealText
            text="Wishes & Messages"
            trigger="viewport"
            mode="sentence"
            duration={0.8}
          />
        </h3>

        {/* 4 + 1 Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border border-neutral-800 bg-[#030712] flex flex-col gap-3 shadow-lg ${
                index === 4 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""
              }`}
            >
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span className="font-semibold text-gray-200 text-lg">
                  <RevealText
                    text={msg.fullname}
                    trigger="viewport"
                    duration={0.5}
                  />
                </span>
                <span
                  className={`text-xs italic px-2 py-1 rounded-full whitespace-nowrap border ${getBadgeStyle(msg.attendance)}`}
                >
                  <RevealText
                    text={msg.attendance}
                    trigger="viewport"
                    duration={0.5}
                  />
                </span>
              </div>
              <p className="text-gray-400 italic leading-relaxed text-sm md:text-base">
                <RevealText
                  text={msg.message}
                  trigger="viewport"
                  mode="sentence"
                  duration={0.6}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RSVP;
