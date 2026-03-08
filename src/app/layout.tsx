import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/modules/shared/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "youssef nabil",
  description: "youssef nabil's personal website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // await configureDeepSeek();

  return (
    <html lang="en" className="overflow-hidden!">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh dark test w-screen overflow-hidden`}
      >
        <div className=" h-screen overflow-hidden">{children}</div>
        <Navbar />
        <div className="noise"></div>
        <div className="falling-particles"></div>
        {/* <div className="absolute left-0 top-0 w-full h-full"></div> */}
        <Analytics />
      </body>
    </html>
  );
}
