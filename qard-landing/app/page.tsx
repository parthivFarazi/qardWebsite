"use client";

import { useState, useEffect } from "react";
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
  const [cardState, setCardState] = useState<'over' | 'background' | 'hidden'>('over');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate section positions - adjusted for better accuracy
      const heroEnd = windowHeight; // End of hero section
      const keywordsEnd = windowHeight * 2; // End of keywords section (second page)
      const teamStart = windowHeight * 5; // Approximate start of team section
      const waitlistStart = windowHeight * 7; // Approximate start of waitlist section
      
      // Determine card state based on scroll position
      let newState: 'over' | 'background' | 'hidden';
      
      if (scrollY < keywordsEnd) {
        // First two pages: card over text
        newState = 'over';
      } else if (scrollY >= keywordsEnd && scrollY < teamStart) {
        // Mission, Story, Values sections: card in background
        newState = 'background';
      } else if (scrollY >= teamStart && scrollY < waitlistStart) {
        // Team section: card in background (not hidden)
        newState = 'background';
      } else {
        // Waitlist section: card hidden
        newState = 'hidden';
      }
      
      // Only update state if it's different to avoid unnecessary re-renders
      if (newState !== cardState) {
        setCardState(newState);
      }
    };

    // Call once on mount to set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cardState]); // Add cardState to dependencies

  const handleJoinWaitlistClick = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      // Smooth scroll to show the scrolling motion
      el.scrollIntoView({ 
        behavior: "smooth", 
        block: "start"
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full min-h-screen bg-black font-sans overflow-x-hidden relative">
      {/* Logo */}
      <div 
        style={{
          position: 'fixed',
          top: '24px',
          left: '24px',
          zIndex: 99999,
          cursor: 'pointer',
          pointerEvents: 'auto',
        }}
        onClick={handleLogoClick}
      >
        <img 
          src="/qardlogo2.png" 
          alt="Qard Logo" 
          style={{
            height: '100px',
            width: 'auto',
            display: 'block',
            maxWidth: 'none',
          }}
          onError={(e) => {
            console.error('Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
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

      {/* 3D Rotating Card - Dynamic positioning based on scroll */}
      {cardState !== 'hidden' && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            width: "36vw", // Reduced from 40vw
            height: "24vw", // Reduced from 28vw
            minWidth: 360, // Reduced from 400
            minHeight: 240, // Reduced from 280
            maxWidth: 650, // Reduced from 700
            maxHeight: 450, // Reduced from 500
            transform: "translate(-50%, -50%)",
            zIndex: cardState === 'over' ? 15 : 5,
            pointerEvents: "none",
            opacity: 1,
            transition: "z-index 0.3s ease-out",
            overflow: "visible", // Allow card to extend beyond container
            marginTop: "20px",
          }}
        >
                                                     <ThreeDCard
                            front="/qardFinal.jpg"
                            back="/qardFinal.jpg"
                            width={3.375}
                            height={2.125}
                            thickness={0.33}
                            autoRotate
                            autoRotateSpeed={0.001}
                          />
        </div>
      )}

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
