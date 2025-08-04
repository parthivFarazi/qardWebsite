"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ smooth: true, lerp: 0.09 }}>
      {children}
    </ReactLenis>
  );
}

