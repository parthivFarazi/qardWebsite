"use client";

import ScrollKeywordsSection from "./components/ScrollKeywordsSection";
import ThreeDCard from "./components/ThreeDCard";
import MissionSection from "./components/MissionStatement";
import StorySection from "./components/StorySection";
import ValueSection from "./components/OurValuesSection"
import TeamSection from "./components/TeamSection";
import SignupFormSection from "./components/SignupFormSection";
import Footer from "./components/Footer";
import styles from "./components/JoinWaitlistButton.module.css"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black font-sans overflow-x-hidden relative">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Join Waitlist Button */}
        <button
          className={styles.joinWaitlistButton}
          onClick={() => {
            const el = document.getElementById("waitlist");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
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
            style={{
              letterSpacing: "-0.02em",
            }}
          >
            MAXIMIZE REWARDS<br />
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
          Qard stores your cards and instantly picks the best one for every purchase—so you earn more with zero effort.
        </div>
      </section>

      {/* SCROLLING KEYWORDS SECTION */}
      <ScrollKeywordsSection />

      {/* 3D Rotating Card */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "34vw",
          height: "22vw",
          minWidth: 320,
          minHeight: 200,
          maxWidth: 600,
          maxHeight: 400,
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <ThreeDCard
          front="/qard-metallic-card.jpg"
          back="/qard-metallic-card.jpg"
          width={3.375}
          height={2.125}
          thickness={0.33}
          autoRotate
          autoRotateSpeed={0.003}
        />
      </div>

      {/* Page Sections */}
      <MissionSection />
      <StorySection/>
      <ValueSection/>
      <TeamSection/>
      <SignupFormSection/>
      <Footer/>
    </div>
  );
}
