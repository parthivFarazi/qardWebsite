'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.createElement('div');
    const blob = document.createElement('div');

    dot.className = 'cursor-dot';
    blob.className = 'cursor-blob';

    document.body.appendChild(dot);
    document.body.appendChild(blob);

    let mouseX = 0, mouseY = 0;
    let blobX = 0, blobY = 0;

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateBlob = () => {
      blobX += (mouseX - blobX) * 0.1;
      blobY += (mouseY - blobY) * 0.1;

      blob.style.left = `${blobX}px`;
      blob.style.top = `${blobY}px`;
      requestAnimationFrame(animateBlob);
    };

    document.addEventListener('mousemove', updateMouse);
    animateBlob();

    return () => {
      document.removeEventListener('mousemove', updateMouse);
      dot.remove();
      blob.remove();
    };
  }, []);

  return null;
}
