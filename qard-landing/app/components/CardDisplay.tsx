'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

type Props = {
  imageSrc?: string;
  zIndex?: number;
  thickness?: number;       // distance between front & back in px
  rotationSpeed?: number;   // ms per full rotation
};

export default function CardDisplay({
  imageSrc = '/qardFinal.jpg',
  zIndex = 10,
  thickness = 50,
  rotationSpeed = 20000, // 20s per spin
}: Readonly<Props>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);

  // Auto-rotate when not dragging
  useEffect(() => {
    if (dragging) return;
    let frame: number;
    let prev = performance.now();
    const animate = (now: number) => {
      const delta = now - prev;
      prev = now;
      rotateY.set(rotateY.get() + (delta * 360) / rotationSpeed);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [dragging, rotateY, rotationSpeed]);

  const dragState = useRef({ x: 0, y: 0, startX: 0, startY: 0 });

  function handlePointerDown(e: React.PointerEvent) {
    setDragging(true);
    dragState.current = {
      x: rotateY.get(),
      y: rotateX.get(),
      startX: e.clientX,
      startY: e.clientY,
    };
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  }
  function handlePointerMove(e: PointerEvent) {
    const { x, y, startX, startY } = dragState.current;
    const sensitivity = 2.2;
    rotateY.set(x + (e.clientX - startX) / sensitivity);
    rotateX.set(y - (e.clientY - startY) / sensitivity);
  }
  function handlePointerUp() {
    setDragging(false);
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '28vw',
        height: '18vw',
        minWidth: 280,
        minHeight: 180,
        maxWidth: 500,
        maxHeight: 320,
        zIndex,
        perspective: 1200,
        pointerEvents: 'auto',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          rotateY,
          rotateX,
          transformStyle: 'preserve-3d',
          cursor: dragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          borderRadius: '22px',
          boxShadow:
            '0 10px 60px rgba(60, 40, 110, 0.4), 0 4px 25px rgba(110, 100, 180, 0.15)',
          background: 'linear-gradient(135deg, #16141e 60%, #473e7e 100%)',
          overflow: 'hidden',
        }}
        onPointerDown={handlePointerDown}
      >
        {/* Front face (toward viewer) */}
        <img
          src={imageSrc}
          alt="Qard Card Front"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            borderRadius: '18px',
            objectFit: 'cover',
            transform: `translateZ(${thickness / 2}px)`,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden', // don't show its back
            userSelect: 'none',
            pointerEvents: 'none',
            boxShadow: '0 2px 20px #3a3a6599',
          }}
          draggable={false}
        />

        {/* Back face (faces backward, same image, NOT mirrored to viewer) */}
        <img
          src={imageSrc}
          alt="Qard Card Back"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            borderRadius: '18px',
            objectFit: 'cover',
            // flip the plane so its FRONT points backwards, then move it out
            transform: `rotateY(180deg) translateZ(${thickness / 2}px) scaleX(-1)`,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden', // hide reversed side
            userSelect: 'none',
            pointerEvents: 'none',
            boxShadow: '0 2px 20px #3a3a6599',
          }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
