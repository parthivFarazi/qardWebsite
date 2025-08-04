"use client";
import { ReactNode } from "react";

// Simple provider - no smooth scrolling
export default function SimpleProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

