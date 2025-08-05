'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CardDisplay() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);

  useEffect(() => {
    if (dragging) return;
    let frame: number;
    let prev = performance.now();
    function animate(now: number) {
      const delta = now - prev;
      prev = now;
      rotateY.set(rotateY.get() + (delta * 360) / 12000);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [dragging, rotateY]);

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
    <motion.div
      ref={cardRef}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '420px',
        height: '260px',
        marginTop: '-130px',
        marginLeft: '-210px',
        zIndex: 10,
        perspective: 1200,
        cursor: dragging ? 'grabbing' : 'grab',
        rotateY: rotateY,
        rotateX: rotateX,
        userSelect: 'none',
        boxShadow: '0 10px 60px 0 rgba(60, 40, 110, 0.27), 0 2px 20px 0 rgba(110, 100, 180, 0.08)', // enhanced shadow
        borderRadius: '22px',
        background: 'linear-gradient(135deg, #16141e 60%, #473e7e 100%)',
        border: '2.5px solid #cac6f7',
      }}
      onPointerDown={handlePointerDown}
    >
      <img
        src="/qard-metallic-card.jpg"
        alt="Qard Card"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '18px',
          objectFit: 'cover',
          transformStyle: 'preserve-3d',
          userSelect: 'none',
          pointerEvents: 'none',
          boxShadow: '0 1.5px 20px 0 #3a3a6599',
        }}
        draggable={false}
      />
    </motion.div>
  );
}
