export default function StorySection() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-end justify-start px-[2vw] pt-[0vw] bg-black overflow-hidden">
      {/* Headline */}
      <div className="text-white/60 text-[2vw] uppercase mb-2 tracking-[0.18em] z-20 text-right w-full max-w-[55vw] pr-[5vw]">
        our story
      </div>
      {/* Statement */}
      <h1
        className="relative font-[400] text-white text-[4vw] leading-[1.15] max-w-[60vw] z-20 text-right w-full pr-[5vw]"
        style={{ letterSpacing: "-.02em" }}>
          Qard was born from the frustration of never knowing which card would maximize rewards. Our founders set out to automate the smartest spending decisions—making rewards optimization seamless for everyone.
      </h1>
      {/* Card - behind, slightly lower and to the right */}
      <div
        className="absolute right-[8vw] top-[16vw] z-10 pointer-events-none"
        style={{
          width: "32vw",
          height: "20vw",
          filter: "drop-shadow(0 4px 40px #a78bfa66)"
        }}
      >
        {/* Put the card image or <ThreeDCard /> here if needed */}
      </div>
    </section>
  );
}
