import type { Metadata } from "next";
import { Libre_Baskerville, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const libre = Libre_Baskerville({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan: Cindia & Robby",
  description:
    "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.",
  openGraph: {
    title: "Undangan Pernikahan: Cindia & Robby",
    description:
      "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.",
    url: "https://cindia-and-robby.storyofbari.com/", // Edit dengan URL deploy Anda nantinya
    siteName: "Undangan Pernikahan Cindia & Robby",
    images: [
      {
        url: "/Slideshow_1.webp", // Ganti dengan path gambar cover Anda jika ingin berbeda
        width: 1200,
        height: 630,
        alt: "Cindia & Robby Wedding",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body
        className={`${libre.className} antialiased min-h-dvh overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
