"use client";

import { useState, useEffect } from "react";
import ScrollKeywordsSection from "./components/ScrollKeywordsSection";
// Removed: import ThreeDCard from "./components/ThreeDCard";
import MissionSection from "./components/MissionStatement";
import StorySection from "./components/StorySection";
import ValueSection from "./components/OurValuesSection";
import TeamSection from "./components/TeamSection";
import SignupFormSection from "./components/SignupFormSection";
import Footer from "./components/Footer";
import styles from "./components/JoinWaitlistButton.module.css";
import CardDisplay from "./components/CardDisplay";

export default function Home() {
  const [cardState, setCardState] = useState<"over" | "background" | "hidden">(
    "over"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const heroEnd = windowHeight;
      const keywordsEnd = windowHeight * 2;
      const teamStart = windowHeight * 5;
      const waitlistStart = windowHeight * 7;

      let newState: "over" | "background" | "hidden";

      if (scrollY < keywordsEnd) {
        newState = "over";
      } else if (scrollY >= keywordsEnd && scrollY < teamStart) {
        newState = "background";
      } else if (scrollY >= teamStart && scrollY < waitlistStart) {
        newState = "background";
      } else {
        newState = "hidden";
      }

      if (newState !== cardState) setCardState(newState);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardState]);

  const handleJoinWaitlistClick = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full min-h-screen bg-black font-sans overflow-x-hidden relative">
      {/* Logo */}
      <div
        style={{
          position: "fixed",
          top: "24px",
          left: "24px",
          zIndex: 99999,
          cursor: "pointer",
          pointerEvents: "auto",
        }}
        onClick={handleLogoClick}
      >
        <img
          src="/qardlogo2.png"
          alt="Qard Logo"
          style={{
            height: "100px",
            width: "auto",
            display: "block",
            maxWidth: "none",
          }}
          onError={(e) => {
            console.error("Logo failed to load:", e);
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Join Waitlist Button */}
        <button
          className={styles.joinWaitlistButton}
          onClick={handleJoinWaitlistClick}
        >
          Join Waitlist
        </button>

        {/* Big Heading */}
        <div className="absolute inset-0 flex items-center z-10 pointer-events-none px-8 w-full h-full">
          <h1
            className="
              font-extrabold
              text-white
              text-[min(12vw,11rem)]
              leading-[0.83]
              tracking-tight
              uppercase
              text-left
              select-none
              break-words
              whitespace-pre-line
              w-full
            "
            style={{ letterSpacing: "-0.02em" }}
          >
            MAXIMIZE REWARDS
            <br />
            MINIMIZE EFFORT
          </h1>
        </div>

        {/* Subheading, top-right */}
        <div
          className="absolute z-30 text-white text-[1vw] font-light tracking-widest"
          style={{
            top: "30%",
            right: "4vw",
            maxWidth: "380px",
            textAlign: "right",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            lineHeight: 1.4,
            pointerEvents: "auto",
          }}
        >
          Qard stores your cards and instantly picks the best one for every
          purchase—so you earn more with zero effort.
        </div>
      </section>

      {/* SCROLLING KEYWORDS SECTION */}
      <ScrollKeywordsSection />

      {/* 3D Rotating Card - restored to Framer Motion version */}
      {cardState !== "hidden" && (
        <CardDisplay zIndex={cardState === "over" ? 15 : 5} />
      )}

      {/* Page Sections */}
      <MissionSection />
      <StorySection />
      <ValueSection />
      <TeamSection />
      <SignupFormSection />
      <Footer />
    </div>
  );
}
