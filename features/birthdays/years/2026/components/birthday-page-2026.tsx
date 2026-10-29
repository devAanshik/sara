"use client";

import { useEffect } from "react";

import LocomotiveScroll from "locomotive-scroll";

import {
  Conversation,
  HeroSection,
  HiddenGems,
  SingingVideos,
} from "@/features/birthdays/years/2026";

import "@/features/birthdays/years/2026/styles.css";

export function BirthdayPage2026() {
  useEffect(() => {
    const locomotive = new LocomotiveScroll();
  });

  return (
    <div className="birthday-2026 text-foreground">
      <header className="fixed inset-0 bottom-auto z-100">
        <div className="mx-auto max-w-360 px-4 lg:px-6 py-6">
          <div className="font-bebas text-4xl">sara</div>
        </div>
      </header>

      <main className="relative bg-fixed bg-no-repeat bg-linear-to-br from-pink-100 to-rose-50">
        <HeroSection />

        <div className="px-4 lg:px-6">
          <Conversation />
          <SingingVideos />
          <HiddenGems />
        </div>
      </main>

      <footer className="bg-fixed bg-no-repeat bg-linear-to-br from-pink-100 to-rose-50">
        <div className="max-w-360 mx-auto px-4 lg:px-6">
          <div className=""></div>

          <div className="text-foreground text-[clamp(9rem,28vw,27rem)] text-center font-bebas leading-none">
            I Love You
          </div>
        </div>
      </footer>
    </div>
  );
}
