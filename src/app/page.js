"use client";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Tokenomics from "./components/Tokenomics";
import Partner from "./components/Partner";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <main className="container mx-auto px-4 overflow-x-hidden overflow-y-auto space-y-16">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video
        autoPlay
        loop
        muted
        preload="true"
        className="fixed -z-20 top-0 left-0 right-0 bottom-0 opacity-40 object-cover w-full h-full"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <HeroSection />
      <Features />
      <Tokenomics />
      <Partner />
      <Roadmap />
      <Faq />
    </main>
  );
}
