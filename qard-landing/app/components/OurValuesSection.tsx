

export default function ValueSection() {
    return (
      <section className="relative w-full min-h-[100vh] flex flex-col items-start justify-start px-[5vw] pt-[0vw] bg-black overflow-hidden">
        {/* Headline */}
        <div className="text-white/60 text-[2vw] uppercase mb-2 tracking-[0.18em] z-20">
          our values
        </div>
        {/* Statement */}
        <h1
          className="relative font-[400] text-white text-[3.5vw] leading-[1.15] max-w-[65vw] z-20"
          style={{ letterSpacing: "-.02em" }}
        >
          We believe in putting our customers' benefits first, prioritizing transparency and security. every feature we build starts with understanding how we can serve our customers and provide tangible value for our community of Qard users.
        </h1>
        {/* Card - behind, slightly lower */}
        <div
          className="absolute left-[6vw] top-[15vw] z-10 pointer-events-none"
          style={{
            width: "32vw",
            height: "20vw",
            filter: "drop-shadow(0 4px 40px #a78bfa66)"
          }}
        >
        </div>
      </section>
    );
  }
  